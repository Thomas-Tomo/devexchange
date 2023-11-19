from django.urls import path
from likes import views

urlpatterns = [
    path('likes/', views.LikeList.as_view()),
    path('likes/<int:pk>/', views.LikeDetail.as_view()),
    path('comment-likes/', views.CommentLikeList.as_view()),
    path('comment-likes/<int:pk>/', views.CommentLikeDetail.as_view()),
    path('job-post-likes/', views.JobPostLikeList.as_view()),
    path('job-post-likes/<int:pk>/', views.JobPostLikeDetail.as_view()),
    path('job-post-comment-likes/', views.JobPostCommentLikeList.as_view()),
    path(
        'job-post-comment-likes/<int:pk>/',
        views.JobPostCommentLikeDetail.as_view()),
    path('job-post-saved/', views.JobPostSavedList.as_view()),
    path('job-post-saved/<int:pk>/', views.JobPostSavedDetail.as_view()),
]
