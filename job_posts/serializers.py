from rest_framework import serializers
from posts.models import JobPost


class JobPostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    title = serializers.CharField(max_length=255)
    description = serializers.TextField()
    location = serializers.CharField(max_length=255)
    job_type = serializers.CharField(max_length=100)
    salary = serializers.DecimalField(max_digits=10, decimal_places=2)
    application_deadline = serializers.DateField()
    experience_level = serializers.CharField(max_length=50)
    company_name = serializers.CharField(max_length=255)
    company_description = serializers.TextField()
    is_active = serializers.BooleanField(default=True)
    application_instructions = serializers.TextField()
    allows_remote_work = serializers.BooleanField(default=False)
    benefits = serializers.TextField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = JobPost
        fields = (
            'owner',
            'created_at',
            'updated_at',
            'title',
            'description',
            'location',
            'job_type',
            'salary',
            'application_deadline',
            'experience_level',
            'company_name',
            'company_description',
            'is_active',
            'application_instructions',
            'allows_remote_work',
            'benefits'
        )
