from django.urls import path
from .views import auth, test, posts

urlpatterns = [
    path('auth/login', auth.loginUser, name='login-user'),
    path('auth/registerUser', auth.registerUser, name='register-user'),
    path('auth/logout', auth.logoutUser, name='logout-user'),
    path('posts/getAll', posts.getAllPosts, name='get all posts'),
    path('posts/upload', posts.uploadPost, name='upload a post'),
    path('posts/del/<str:picId>/', posts.deletePost, name='delete a post'),
    path('posts/like/<str:picId>', posts.likePost, name='like a post'),
    path('posts/profile/<str:username>', posts.getProfile,name='get profile')
]