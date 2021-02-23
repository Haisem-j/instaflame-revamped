from rest_framework.decorators import api_view
from rest_framework.response import Response


from ..models import Post, User

@api_view(['GET'])
def getAllPosts(request):
    try:
        all_posts = Post.objects.all()
        posts_dict = []
        for post in all_posts:
            posts_dict.append({
                "description": post.description,
                "likes": post.likes,
                "profile": post.profile.username,
                "imageId": str(post.image)
            })
        return Response({
            "success": True,
            "msg": 'Successfully retrieved all posts',
            "data": {
                "posts": posts_dict
            }
        }) 
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })

@api_view(['GET'])
def likePost(request, picId):
    try:
        post = Post.objects.get(image=picId)
        post.likes += 1
        post.save()

        return Response({
            "success": True,
            "msg": 'Successfully liked post!',
            "data": {}
        })
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })

@api_view(['GET'])
def getProfile(request, username):
    user = User.objects.get(username=username)
    posts = Post.objects.filter(profile=user).order_by('created_at')
    posts_dict = []
    for post in posts:
        posts_dict.append({
            "profile": post.profile.username,
            "imageId": str(post.image)
        })
    return Response({
        "success": True,
        "msg": 'Successfully returned profiles posts!',
        "data": posts_dict
    })

@api_view(['POST'])
def uploadPost(request):
    try:    
        user = User.objects.get(username=request.data['username'])
        new_post = Post(description=request.data['description'], profile=user, image=request.data['image'])
        new_post.save()
        return Response({
            "success": True,
            "msg": 'Post Successfully uploaded!',
            "data": {}
        })
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })


@api_view(['DELETE'])
def deletePost(request, picId):
    try:
        post = Post.objects.get(image=picId)
        post.delete()
        return Response({
            "success": True,
            "msg": 'Post Successfully deleted!',
            "data": {}
        })
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })


