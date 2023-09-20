from rest_framework import serializers
from .models import Profile, UserProfile, EmployerProfile


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

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
        ]


class UserProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        try:
            request = self.context['request']
            return request.user == obj.owner
        except KeyError:
            # Handle the case where 'request' is not in the context
            return False

    class Meta:
        model = UserProfile
        fields = [
            'id',
            'owner',
            'created_at',
            'updated_at',
            'name',
            'content',
            'image',
            'is_owner',
        ]


class EmployerProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        try:
            request = self.context['request']
            return request.user == obj.owner
        except KeyError:
            # Handle the case where 'request' is not in the context
            return False

    class Meta:
        model = EmployerProfile
        fields = [
            'id',
            'owner',
            'created_at',
            'updated_at',
            'name',
            'content',
            'image',
            'job_description',
            'is_owner',
        ]
