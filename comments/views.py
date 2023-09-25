from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend
from devexchange.permissions import IsOwnerOrReadOnly
from .models import Comment, Reply, JobPostComment
from .serializers import (
    CommentSerializer, CommentDetailSerializer, ReplySerializer,
    JobPostCommentSerializer
)


class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'post'
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentDetailSerializer
    queryset = Comment.objects.all()


class ReplyList(generics.ListCreateAPIView):
    serializer_class = ReplySerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        # Assuming you want to filter replies based on the parent comment
        parent_comment_id = self.kwargs['parent_comment_id']
        return Reply.objects.filter(parent_comment__id=parent_comment_id)

    def perform_create(self, serializer):
        # Assuming you want to associate the reply with a parent comment
        parent_comment_id = self.kwargs['parent_comment_id']
        parent_comment = Comment.objects.get(pk=parent_comment_id)
        serializer.save(owner=self.request.user, parent_comment=parent_comment)


class ReplyDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()


class JobPostCommentList(generics.ListCreateAPIView):
    queryset = JobPostComment.objects.all()
    serializer_class = JobPostCommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
