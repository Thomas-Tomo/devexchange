from django.db import models
from django.contrib.auth.models import User


class JobPost(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255, blank=True)
    job_type = models.CharField(max_length=100, blank=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    application_deadline = models.DateField(blank=True, null=True)
    experience_level = models.CharField(max_length=50, blank=True)
    company_name = models.CharField(max_length=255)
    company_description = models.TextField()
    is_active = models.BooleanField(default=True)
    application_instructions = models.TextField()
    allows_remote_work = models.BooleanField(default=False)
    benefits = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
