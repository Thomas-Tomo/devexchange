from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from devexchange.permissions import IsOwnerOrReadOnly, IsEmployerOrReadOnly
from .models import JobPost
from .serializers import JobPostSerializer


class JobPostList(generics.ListCreateAPIView):
    serializer_class = JobPostSerializer
    permission_classes = [IsEmployerOrReadOnly]
    queryset = JobPost.objects.annotate(
        likes_count=Count('likes', distinct=True),
        saved_count=Count('saved', distinct=True),
        comments_count=Count('jobpostcomment', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    search_fields = [
        'owner__username',
        'title',
        'location',
        'company_name',
    ]
    ordering_fields = [
        'likes_count',
        'likes_created_at',
        'comments_count',
        'saved_count',
        'saved_created_at',
    ]
    filterset_fields = [
        'owner__profile',
        'saved__owner__profile',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobPostSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = JobPost.objects.annotate(
        comments_count=Count('jobpostcomment', distinct=True),
        likes_count=Count('likes', distinct=True),
        saved_count=Count('saved', distinct=True)
    ).order_by('-created_at')
