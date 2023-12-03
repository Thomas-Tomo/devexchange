from django.db import models
from django.contrib.auth.models import User


class UserSkill(models.Model):
    """
    Model to store user skills and related information.
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    education = models.TextField(blank=True)
    work_experience = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    certifications = models.TextField(blank=True)
    languages = models.TextField(blank=True)
    linkedin_profile = models.URLField(max_length=255, blank=True)
    github_profile = models.URLField(max_length=255, blank=True)
    portfolio_website = models.URLField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.owner}'s Skills"
