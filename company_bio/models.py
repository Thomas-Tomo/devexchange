from django.db import models
from django.contrib.auth.models import User


class CompanyBio(models.Model):
    """
    Represents a user's company bio details.
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255, blank=True)
    employees_count = models.PositiveIntegerField(blank=True, null=True)
    recruiting_status = models.BooleanField(default=False)
    technologies_used = models.TextField(blank=True)
    company_description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.owner}'s Company Bio"
