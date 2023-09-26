from rest_framework import generics, permissions
from devexchange.permissions import IsOwnerOrReadOnly
from .models import Like, CommentLike, JobPostLike, JobPostCommentLike
from .serializers import (
    LikeSerializer, CommentLikeSerializer,
    JobPostLikeSerializer, JobPostCommentLikeSerializer
    )


class LikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()


class CommentLikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentLikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()


class JobPostLikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostLikeSerializer
    queryset = JobPostLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostLikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostLikeSerializer
    queryset = JobPostLike.objects.all()


class JobPostCommentLikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentLikeSerializer
    queryset = JobPostCommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostCommentLikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentLikeSerializer
    queryset = JobPostCommentLike.objects.all()
