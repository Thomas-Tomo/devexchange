from django.contrib import admin
from .models import Profile, UserProfile, EmployerProfile

admin.site.register(Profile)
admin.site.register(UserProfile)
admin.site.register(EmployerProfile)
