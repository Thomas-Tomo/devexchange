from django.db import models
from django.contrib.auth.models import User
from posts.models import Post


class Comment(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.CASCADE,
        related_name='replies_to_comment'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content


class Reply(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        Comment, on_delete=models.CASCADE, related_name='replies_to_reply'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
