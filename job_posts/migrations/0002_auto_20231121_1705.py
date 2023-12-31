# Generated by Django 3.2.21 on 2023-11-21 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobpost',
            name='application_deadline',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='benefits',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='experience_level',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='job_type',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='location',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='salary',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
