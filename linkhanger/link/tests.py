from django.test import TestCase
from django.contrib.auth.models import User
from .models import Link

# Create your tests here.

class LinkTestCase(TestCase):


    def test_basic(self):
        user = User.objects.create_user(username='testuser',password='testpassword')

        instance = Link()
        instance.title = 'Test'
        instance.url = 'http://www.google.com'
        instance.user= user
        instance.save()

        self.assertEqual(instance.title,'Test')
        self.assertEqual(instance.url,'http://www.google.com')

    def test_title_url_is_valid_is_live(self):
        user = User.objects.create_user(username='testuser',password='testpassword')
        instance = Link()
        instance.title = 'Test'
        instance.url = 'http://wgoogle.com'
        instance.full_clean()
        instance.clean()
        instance.save()
        self.assertEqual(instance.is_valid,True)
        self.assertEqual(instance.is_live,True)
    
