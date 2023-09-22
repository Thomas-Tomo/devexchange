from rest_framework import generics, permissions
from devexchange.permissions import IsOwnerOrReadOnly
from .models import Like, CommentLike
from .serializers import LikeSerializer, CommentLikeSerializer


class LikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()


class CommentLikeList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentLikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()
