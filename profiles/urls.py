from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.ProfileList.as_view()),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
    path('user-profiles/', views.UserProfileList.as_view()),
    path('user-profiles/<int:pk>/', views.UserProfileDetail.as_view()),
    path('employer-profiles/', views.EmployerProfileList.as_view()),
    path('employer-profiles/<int:pk>/', views.EmployerProfileDetail.as_view()),
]