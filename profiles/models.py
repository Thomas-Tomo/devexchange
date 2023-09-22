from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/',
        default='../default_profile_icon_dq1crk')

    # Add the user_type field to the base Profile model
    USER_TYPE_CHOICES = [
        ('regular', 'Regular User'),
        ('employer', 'Employer'),
    ]
    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES,
        default='regular')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


class UserProfile(Profile):
    # Add fields specific for user profile here
    education = models.TextField(blank=True)
    work_experience = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    certifications = models.TextField(blank=True)
    languages = models.TextField(blank=True)
    linkedin_profile = models.URLField(max_length=255, blank=True)
    github_profile = models.URLField(max_length=255, blank=True)
    portfolio_website = models.URLField(max_length=255, blank=True)


class EmployerProfile(Profile):
    # Add fields specific for employer profile here
    company_name = models.CharField(max_length=255, blank=True)
    employees_count = models.PositiveIntegerField(blank=True, null=True)
    recruiting_status = models.BooleanField(default=False)
    technologies_used = models.TextField(blank=True)
    company_description = models.TextField(blank=True)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        # Determine user_type based on instance
        if hasattr(instance, 'userprofile'):
            instance.userprofile.user_type = 'regular'
            instance.userprofile.save()
        elif hasattr(instance, 'employerprofile'):
            instance.employerprofile.user_type = 'employer'
            instance.employerprofile.save()


post_save.connect(create_user_profile, sender=User)
