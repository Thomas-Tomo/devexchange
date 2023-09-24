from django.urls import path
from comments import views

urlpatterns = [
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),

    path('replies/<int:parent_comment_id>/', views.ReplyList.as_view()),
    path(
        'replies/<int:parent_comment_id>/<int:pk>/',
        views.ReplyDetail.as_view()),

]
