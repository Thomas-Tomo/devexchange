from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Comment, Reply, JobPostComment, JobPostCommentReply
from likes.models import CommentLike


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    comment_like_id = serializers.SerializerMethodField()
    comment_likes_count = serializers.ReadOnlyField()
    replies = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    def get_comment_like_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            comment_like = CommentLike.objects.filter(
                owner=user, comment=obj
            ).first()
            return comment_like.id if comment_like else None
        return None

    def get_replies(self, obj):
        # Retrieve the replies for this comment using Comment model
        replies_comment_model = Comment.objects.filter(parent_comment=obj)

        # Retrieve the replies for this comment using Reply model
        replies_reply_model = Reply.objects.filter(parent_comment=obj)

        # Extract the content of each reply from Comment model
        reply_content_comment_model = [
            reply.content for reply in replies_comment_model]

        # Extract the content of each reply from Reply model
        reply_content_reply_model = [
            reply.content for reply in replies_reply_model]

        # Combine the content from both models
        all_reply_content = (
            reply_content_comment_model + reply_content_reply_model)

        return all_reply_content

    class Meta:
        model = Comment
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'profile_image', 'created_at', 'updated_at',
            'post', 'content', 'comment_like_id', 'comment_likes_count',
            'replies',
        ]


class CommentDetailSerializer(CommentSerializer):
    post = serializers.ReadOnlyField(source='post.id')


class ReplySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Reply
        fields = [
            'id', 'owner', 'created_at', 'updated_at',
            'parent_comment', 'content',
        ]


class JobPostCommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    def get_replies(self, obj):
        # Retrieve the replies for this comment using Comment model
        replies_comment_model = JobPostComment.objects.filter(
            parent_comment=obj)

        # Retrieve the replies for this comment using Reply model
        replies_reply_model = JobPostCommentReply.objects.filter(
            parent_comment=obj)

        # Extract the content of each reply from Comment model
        reply_content_comment_model = [
            reply.content for reply in replies_comment_model]

        # Extract the content of each reply from Reply model
        reply_content_reply_model = [
            reply.content for reply in replies_reply_model]

        # Combine the content from both models
        all_reply_content = (
            reply_content_comment_model + reply_content_reply_model)

        return all_reply_content

    class Meta:
        model = JobPostComment
        fields = (
            'id', 'owner', 'is_owner', 'job_post', 'profile_id',
            'profile_image', 'updated_at',
            'created_at', 'content', 'replies')


class JobPostCommentDetailSerializer(JobPostCommentSerializer):
    job_post = serializers.ReadOnlyField(source='job_post.id')


class JobPostCommentReplySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = JobPostCommentReply
        fields = [
            'id', 'owner', 'created_at', 'updated_at',
            'parent_comment', 'content',
        ]
