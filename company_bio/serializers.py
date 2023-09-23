from rest_framework import serializers
from .models import CompanyBio


class CompanyBioSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    company_name = serializers.CharField(max_length=255, required=False)
    employees_count = serializers.IntegerField(required=False)
    recruiting_status = serializers.BooleanField(required=False)
    technologies_used = serializers.CharField(allow_blank=True, required=False)
    company_description = serializers.CharField(
        allow_blank=True,
        required=False
    )

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = CompanyBio
        fields = [
            'id',
            'owner',
            'is_owner',
            'company_name',
            'employees_count',
            'recruiting_status',
            'technologies_used',
            'company_description'
        ]
