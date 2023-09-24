from rest_framework import serializers
from job_posts.models import JobPost


class JobPostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = JobPost
        fields = [
            'id',
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
        ]
