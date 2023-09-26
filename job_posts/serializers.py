from rest_framework import serializers
from job_posts.models import JobPost
from likes.models import JobPostLike


class JobPostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    like_id = serializers.SerializerMethodField()
    likes_count = serializers.ReadOnlyField()
    comments_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_like_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            like = JobPostLike.objects.filter(
                owner=user, job_post=obj
            ).first()
            return like.id if like else None
        return None

    class Meta:
        model = JobPost
        fields = [
            'id',
            'owner',
            'is_owner',
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
            'benefits',
            'like_id',
            'likes_count',
            'comments_count',
        ]
