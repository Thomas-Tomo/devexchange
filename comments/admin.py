from django.contrib import admin
from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('owner', 'post', 'content', 'created_at')
    list_filter = ('post',)
    search_fields = ('owner__username', 'post__title')
    list_per_page = 20
