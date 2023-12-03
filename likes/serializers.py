from django.db import IntegrityError
from rest_framework import serializers
from likes.models import (
    Like, CommentLike, JobPostLike, JobPostCommentLike, JobPostSaved
    )


class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the Like model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Like
        fields = [
            'id',
            'created_at',
            'owner',
            'post',
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })


class CommentLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the CommentLike model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = CommentLike
        fields = [
            'id',
            'created_at',
            'owner',
            'comment',
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })


class JobPostLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the JobPostLike model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = JobPostLike
        fields = [
            'id',
            'created_at',
            'owner',
            'job_post',
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })


class JobPostCommentLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the JobPostCommentLike model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = JobPostCommentLike
        fields = [
            'id',
            'created_at',
            'owner',
            'job_post_comment',
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })


class JobPostSavedSerializer(serializers.ModelSerializer):
    """
    Serializer for the JobPostSaved model.
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = JobPostSaved
        fields = [
            'id',
            'created_at',
            'owner',
            'job_post',
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })
