from django.contrib import admin
from .models import UserSkill


@admin.register(UserSkill)
class UserSkillAdmin(admin.ModelAdmin):
    list_display = ('owner', 'education', 'work_experience')
    search_fields = ('owner__username',)
    list_per_page = 20
