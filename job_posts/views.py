
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from devexchange.permissions import IsOwnerOrReadOnly
from .models import JobPost
from .serializers import JobPostSerializer


class JobPostList(generics.ListCreateAPIView):
    serializer_class = JobPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = JobPost.objects.all()
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    search_fields = [
        'owner__username',
        'title',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobPostSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = JobPost.objects.all()
