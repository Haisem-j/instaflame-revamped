from django.db import models

# User Model
class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=1024)
    token = models.CharField(max_length=1024, null=True)

    def __str__(self):
        return self.username

# Post Model
class Post(models.Model):
    description = models.CharField(max_length=200)
    likes = models.IntegerField(default=0)
    profile = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='./')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.description


# Comment Model
class Comment(models.Model):
    comment = models.CharField(max_length=200)
    profile = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
