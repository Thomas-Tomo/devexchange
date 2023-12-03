from django.db import models
from django.contrib.auth.models import User
from posts.models import Post
from job_posts.models import JobPost


class Comment(models.Model):
    """
    Represents a comment made by a user on a Post.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.CASCADE,
        related_name='replies_to_comment'
    )  # Allows comments to be replies to other comments
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content


class Reply(models.Model):
    """
    Represents a reply made by a user to a specific Comment.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        Comment, on_delete=models.CASCADE, related_name='replies_to_reply'
    )  # The comment to which this reply is directed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content


class JobPostComment(models.Model):
    """
    Represents a comment made by a user on a JobPost.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    job_post = models.ForeignKey(JobPost, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.CASCADE,
        related_name='replies_to_comment'
    )  # Allows job post comments to be replies to other job post comments
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content


class JobPostCommentReply(models.Model):
    """
    Represents a reply made by a user to a specific JobPostComment.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        JobPostComment, on_delete=models.CASCADE,
        related_name='replies_to_reply'
    )  # The job post comment to which this reply is directed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
