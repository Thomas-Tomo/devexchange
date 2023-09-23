from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'owner', 'title',
        'content', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('title', 'content', 'owner__username')
    list_editable = ('title', 'owner')
    list_per_page = 20
