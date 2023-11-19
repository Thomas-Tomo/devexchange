from django.db import models
from django.contrib.auth.models import User
from posts.models import Post
from job_posts.models import JobPost
from comments.models import Comment, JobPostComment


class Like(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, related_name='likes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'post']

    def __str__(self):
        return f"{self.owner} {self.post}"


class CommentLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(
        Comment, related_name='likes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'comment']

    def __str__(self):
        return f"{self.owner} likes {self.comment}"


class JobPostLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    job_post = models.ForeignKey(
        JobPost, related_name='likes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'job_post']

    def __str__(self):
        return f"{self.owner} {self.job_post}"


class JobPostCommentLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    job_post_comment = models.ForeignKey(
        JobPostComment, related_name='likes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'job_post_comment']

    def __str__(self):
        return f"{self.owner} likes {self.Job_post_comment}"


class JobPostSaved(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    job_post = models.ForeignKey(
        JobPost, related_name='saved', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'job_post']

    def __str__(self):
        return f"{self.owner} {self.job_post}"