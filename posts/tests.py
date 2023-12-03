from django.contrib.auth.models import User
from .models import Post
from rest_framework import status
from rest_framework.test import APITestCase


class PostListViewTest(APITestCase):
    def setUp(self):
        # Create a user for testing purposes
        User.objects.create_user(username='test', password='pass')

    def test_can_list_posts(self):
        # Test if the API can successfully list posts
        test = User.objects.get(username='test')
        Post.objects.create(owner=test, title='new title')
        response = self.client.get('/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))

    def test_logged_in_user_can_create_post(self):
        # Test if a logged-in user can create a post
        self.client.login(username='test', password='pass')
        response = self.client.post('/posts/', {'title': 'new title'})
        count = Post.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_post(self):
        # Test if a user who is not logged in cannot create a post
        response = self.client.post('/posts/', {'title': 'new title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class PostDetailViewTests(APITestCase):
    def setUp(self):
        # Create users and their respective posts for testing
        test = User.objects.create_user(username='test', password='pass')
        testuser = User.objects.create_user(
            username='testuser', password='pass')
        Post.objects.create(
            owner=test, title='test title', content='tests content'
        )
        Post.objects.create(
            owner=testuser, title='testuser title', content='testuser content'
        )

    def test_can_retrieve_post_using_valid_id(self):
        # Test if the API can retrieve a post using a valid ID
        response = self.client.get('/posts/1/')
        self.assertEqual(response.data['title'], 'test title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_post_using_invalid_id(self):
        # Test if the API correctly returns a 404 status
        response = self.client.get('/posts/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_update_own_post(self):
        # Test if a user can update their own post
        self.client.login(username='test', password='pass')
        response = self.client.put(
            '/posts/1/', {'title': 'tests brand new title'})
        post = Post.objects.filter(pk=1).first()
        self.assertEqual(post.title, 'tests brand new title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cant_update_another_users_post(self):
        # Test if a user cannot update another user's post
        self.client.login(username='test', password='pass')
        response = self.client.put(
            '/posts/2/', {'title': 'tests brand new title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
