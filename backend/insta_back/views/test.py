from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers import PostSerializer, UserSerializer, CommentSerializer

from ..models import Post, User, Comment

import bcrypt
import jwt
from datetime import datetime, timedelta

@api_view(['POST'])
def tokenCheck(request):
    try:
        payload = jwt.decode(request.data['token'], 'servsat1324jm',algorithms=['HS256'])
        print('Token Verified!!')
    except:
        print('Token expired!!')

    return Response({
        'success': True,
        'msg': 'Some shit were working on'
    })

@api_view(['POST'])
def checker(request):
    
    user = User.objects.get(token=request.META['HTTP_JWT'])
    user.token = ''
    print(user.token)
    
    return Response({
        'success': True,
        'msg': 'Some shit were working on'
    })

