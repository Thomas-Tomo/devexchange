# Generated by Django 3.2.21 on 2023-09-22 13:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0005_profile_user_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='profile_ptr',
        ),
        migrations.DeleteModel(
            name='EmployerProfile',
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
