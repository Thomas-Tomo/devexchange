from django.urls import path
from job_posts import views

urlpatterns = [
    path('job-posts/', views.JobPostList.as_view()),
    path('job-posts/<int:pk>/', views.JobPostDetail.as_view()),
]
