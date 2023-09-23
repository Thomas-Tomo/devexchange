from rest_framework import serializers
from .models import UserSkill


class UserSkillSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    