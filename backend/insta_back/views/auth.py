from rest_framework.decorators import api_view
from rest_framework.response import Response


from ..models import Post, User

import bcrypt
import jwt
from datetime import datetime, timedelta

@api_view(['POST'])
def registerUser(request):

    try:
        users = User.objects.filter(username=request.data['username'])
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })
    if users:
        return Response({
            "success": False,
            "msg": 'The username has already been taken',
            "data": {}
        })
    else:
        hashed = bcrypt.hashpw(request.data['password'].encode('utf8'), bcrypt.gensalt())
        user = User(username=request.data['username'], email=request.data['email'], password=hashed)
        user.save()
    return Response({
        'success': True,
        'msg': 'User successfully registered',
        'data': {
            'username': request.data['username'],
            'email': request.data['email']
        }
    })

@api_view(['POST'])
def loginUser(request):
    try:
        users = User.objects.filter(username=request.data['username'])
        if users and bcrypt.checkpw(request.data['password'].encode('utf8'), users[0].password[2:-1].encode('utf8')):
            payload = {
                'username': request.data['username'],
                'exp': datetime.utcnow() + timedelta(seconds=600)
            }
            jwt_token = jwt.encode(payload, 'servsat1324jm', 'HS256')
            users[0].token = jwt_token
            users[0].save()
            return Response({
                "success": True,
                "msg": 'Successfully logged in!',
                "data": {
                    "token": jwt_token
                }
            })
        else:
            return Response({
                "success": False,
                "msg": 'Wrong credentials!',
                "data": {}
            })
     
        return Response({
            "success": True,
            "msg": "Works"
        })
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })

@api_view(['GET'])
def logoutUser(request):
    try:
        user = User.objects.get(token=request.META['HTTP_JWT'])
        user.token = ''
        return Response({
            "success": True,
            "msg": 'Successfully logged out user',
            'data': {}
        })
    except:
        return Response({
            "success": False,
            "msg": 'Something went wrong'
        })