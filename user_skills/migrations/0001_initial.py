# Generated by Django 3.2.21 on 2023-09-23 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserSkill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('education', models.TextField(blank=True)),
                ('work_experience', models.TextField(blank=True)),
                ('skills', models.TextField(blank=True)),
                ('certifications', models.TextField(blank=True)),
                ('languages', models.TextField(blank=True)),
                ('linkedin_profile', models.URLField(blank=True, max_length=255)),
                ('github_profile', models.URLField(blank=True, max_length=255)),
                ('portfolio_website', models.URLField(blank=True, max_length=255)),
            ],
        ),
    ]
