from rest_framework import serializers
from .models import UserSkill


class UserSkillSerializer(serializers.ModelSerializer):
    """
    Serializer to handle UserSkill model data.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    education = serializers.CharField(
        max_length=255,
        allow_blank=True,
        required=False)
    work_experience = serializers.CharField(
        max_length=255,
        allow_blank=True,
        required=False)
    skills = serializers.CharField(
        max_length=255,
        allow_blank=True,
        required=False)
    certifications = serializers.CharField(
        max_length=255,
        allow_blank=True,
        required=False)
    languages = serializers.CharField(
        max_length=255,
        allow_blank=True,
        required=False)
    linkedin_profile = serializers.URLField(
        max_length=255,
        allow_blank=True,
        required=False)
    github_profile = serializers.URLField(
        max_length=255,
        allow_blank=True,
        required=False)
    portfolio_website = serializers.URLField(
        max_length=255,
        allow_blank=True,
        required=False)

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = UserSkill
        fields = [
            'id',
            'owner',
            'is_owner',
            'education',
            'work_experience',
            'skills',
            'certifications',
            'languages',
            'linkedin_profile',
            'github_profile',
            'portfolio_website',
        ]
