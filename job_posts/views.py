from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from devexchange.permissions import IsOwnerOrReadOnly, IsEmployerOrReadOnly
from .models import JobPost
from .serializers import JobPostSerializer


class JobPostList(generics.ListCreateAPIView):
    serializer_class = JobPostSerializer
    permission_classes = [IsAuthenticated, IsEmployerOrReadOnly]
    queryset = JobPost.objects.annotate(
        comments_count=Count('likes', distinct=True)
    )
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
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    queryset = JobPost.objects.all()
