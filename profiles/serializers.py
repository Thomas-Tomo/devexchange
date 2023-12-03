from rest_framework import serializers
from .models import Profile
from followers.models import Follower


class ProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for the Profile model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    user_type = serializers.CharField()
    following_id = serializers.SerializerMethodField()
    posts_count = serializers.ReadOnlyField()
    job_posts_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_following_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()
            return following.id if following else None
        return None

    class Meta:
        model = Profile
        fields = [
            'id',
            'owner',
            'created_at',
            'updated_at',
            'name',
            'content',
            'image',
            'is_owner',
            'user_type',
            'following_id',
            'posts_count',
            'job_posts_count',
            'followers_count',
            'following_count',
        ]
