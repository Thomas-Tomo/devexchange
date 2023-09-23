from django.contrib import admin
from .models import CompanyBio


@admin.register(CompanyBio)
class CompanyBioAdmin(admin.ModelAdmin):
    list_display = (
        'owner', 'company_name',
        'employees_count', 'recruiting_status')
    list_filter = ('recruiting_status',)
    search_fields = ('owner__username', 'company_name')
    list_editable = ('company_name', 'employees_count', 'recruiting_status')
    list_per_page = 20
