from rest_framework import generics, permissions
from devexchange.permissions import IsOwnerOrReadOnly
from .models import (
    Like, CommentLike, JobPostLike,
    JobPostCommentLike, JobPostSaved
    )
from .serializers import (
    LikeSerializer, CommentLikeSerializer,
    JobPostLikeSerializer, JobPostCommentLikeSerializer,
    JobPostSavedSerializer
    )


class LikeList(generics.ListCreateAPIView):
    """
    API endpoint to list all likes and create a new like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific like instance.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()


class CommentLikeList(generics.ListCreateAPIView):
    """
    API endpoint to list all comment likes and create a
    new comment like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentLikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific comment like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()


class JobPostLikeList(generics.ListCreateAPIView):
    """
    API endpoint to list all job post likes and create a
    new job post like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostLikeSerializer
    queryset = JobPostLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostLikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific job post like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostLikeSerializer
    queryset = JobPostLike.objects.all()


class JobPostCommentLikeList(generics.ListCreateAPIView):
    """
    API endpoint to list all job post comment likes and create a
    new job post comment like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentLikeSerializer
    queryset = JobPostCommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostCommentLikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific job post
    comment like instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentLikeSerializer
    queryset = JobPostCommentLike.objects.all()


class JobPostSavedList(generics.ListCreateAPIView):
    """
    API endpoint to list all saved job posts and create a
    new saved job post instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostSavedSerializer
    queryset = JobPostSaved.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostSavedDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific saved job post instance.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostSavedSerializer
    queryset = JobPostSaved.objects.all()
