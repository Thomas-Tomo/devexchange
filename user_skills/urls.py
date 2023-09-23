from django.urls import path
from user_skills import views

urlpatterns = [
    path('user-skills/', views.UserSkillList.as_view()),
    path(
        'user-skills/<int:pk>/',
        views.UserSkillDetail.as_view()),
]
