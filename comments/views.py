from rest_framework import generics, permissions, status
from django.db.models import Count
from django.http import Http404
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from devexchange.permissions import IsOwnerOrReadOnly
from .models import Comment, Reply, JobPostComment, JobPostCommentReply
from .serializers import (
    CommentSerializer, CommentDetailSerializer, ReplySerializer,
    JobPostCommentSerializer, JobPostCommentDetailSerializer,
    JobPostCommentReplySerializer
)


class CommentList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating comments.
    """
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Comment.objects.annotate(
        comment_likes_count=Count('likes', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'post'
    ]
    ordering_fields = [
        'comment_likes_count',
        'comment_likes_created_at',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows retrieving, updating, and deleting a comment.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentDetailSerializer
    queryset = Comment.objects.annotate(
        comment_likes_count=Count('likes', distinct=True)
    ).order_by('-created_at')


class ReplyList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating replies for a comment.
    """
    serializer_class = ReplySerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        parent_comment_id = self.kwargs['parent_comment_id']
        queryset = Reply.objects.filter(
            parent_comment__id=parent_comment_id)
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        if queryset.exists():
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif (Comment.objects
              .filter(id=self.kwargs['parent_comment_id']).exists()):
            return Response([], status=status.HTTP_200_OK)
        else:
            return Response({
                'message': 'Invalid replies url'},
                status=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        # Assuming you want to associate the reply with a parent comment
        parent_comment_id = self.kwargs['parent_comment_id']
        parent_comment = Comment.objects.get(pk=parent_comment_id)
        serializer.save(owner=self.request.user, parent_comment=parent_comment)


class ReplyDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows retrieving, updating, and deleting a reply.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()


class JobPostCommentList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating comments.
    """
    serializer_class = JobPostCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = JobPostComment.objects.annotate(
        comment_likes_count=Count('likes', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'job_post'
    ]
    ordering_fields = [
        'comment_likes_count',
        'comment_likes_created_at',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class JobPostCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows retrieving, updating, and deleting comment.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentDetailSerializer
    queryset = JobPostComment.objects.all()


class JobPostCommentReplyList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating replies for comments.
    """
    serializer_class = JobPostCommentReplySerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        parent_comment_id = self.kwargs['parent_comment_id']
        queryset = JobPostCommentReply.objects.filter(
            parent_comment__id=parent_comment_id)
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        if queryset.exists():
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif (JobPostComment.objects
              .filter(id=self.kwargs['parent_comment_id']).exists()):
            return Response([], status=status.HTTP_200_OK)
        else:
            return Response({
                'message': 'Invalid replies url'},
                status=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        # Assuming you want to associate the reply with a parent comment
        parent_comment_id = self.kwargs['parent_comment_id']
        parent_comment = JobPostComment.objects.get(pk=parent_comment_id)
        serializer.save(owner=self.request.user, parent_comment=parent_comment)


class JobPostCommentReplyDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows retrieving, updating, and deleting comment reply.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = JobPostCommentReplySerializer
    queryset = JobPostCommentReply.objects.all()
