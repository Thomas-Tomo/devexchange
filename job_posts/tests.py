from django.test import TestCase
from django.contrib.auth.models import User
from .models import JobPost
from rest_framework import status


class JobPostModelTest(TestCase):
    def setUp(self):
        self.test_user = User.objects.create_user(
            username='test_user', password='test_password')

    def test_job_post_creation(self):
        # Create a new job post
        test_job_post = JobPost.objects.create(
            owner=self.test_user,
            title='Test Job Post',
            description='This is a test job post description.',
            location='Test Location',
            job_type='Full-time',
            salary=50000.00,
            application_deadline='2023-12-31',
            experience_level='Mid-level',
            company_name='Test Company',
            company_description='This is a test company description.',
            application_instructions='Apply via email.',
            benefits='Test benefits.',
        )
        self.assertEqual(test_job_post.title, 'Test Job Post')
        self.assertEqual(test_job_post.owner, self.test_user)

    def test_job_post_retrieval(self):
        # Create a job post and attempt to retrieve it
        test_job_post = JobPost.objects.create(
            owner=self.test_user,
            title='Test Job Post',
            description='This is a test job post description.',
            location='Test Location',
            job_type='Full-time',
            salary=50000.00,
            application_deadline='2023-12-31',
            experience_level='Mid-level',
            company_name='Test Company',
            company_description='This is a test company description.',
            application_instructions='Apply via email.',
            benefits='Test benefits.',
        )
        response = self.client.get(f'/job-posts/{test_job_post.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Test Job Post')
