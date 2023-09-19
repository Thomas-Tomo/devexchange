from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.ProfileList.as_view()),
    path('user-profiles/', views.UserProfileList.as_view()),
    path('employer-profiles/', views.EmployerProfileList.as_view()),
]
