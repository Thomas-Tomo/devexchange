# Generated by Django 3.2.21 on 2023-09-25 16:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('job_posts', '0001_initial'),
        ('comments', '0005_delete_jobpostcomment'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPostComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
                ('job_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='job_posts.jobpost')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parent_comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies_to_comment', to='comments.jobpostcomment')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
