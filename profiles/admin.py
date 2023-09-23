from django.contrib import admin
from .models import Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('owner', 'name', 'user_type', 'created_at', 'updated_at')
    list_filter = ('user_type', 'created_at', 'updated_at')
    search_fields = ('owner__username', 'name', 'content')
