# Generated by Django 3.2.21 on 2023-09-22 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_auto_20230920_1724'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='user_type',
            field=models.CharField(choices=[('regular', 'Regular User'), ('employer', 'Employer')], default='regular', max_length=10),
        ),
    ]
