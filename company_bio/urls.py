from django.urls import path
from company_bio import views

urlpatterns = [
    path('company-bio/', views.CompanyBioList.as_view()),
    path(
        'company-bio/<int:pk>/',
        views.CompanyBioDetail.as_view()),
]
