
<h1 align="center">
  :fire: InstaFlame :fire:
</h1>
<p align="center">
  A working copy of Instagram with many of its core features completely functional.
</p>

<div align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/23112741/109432606-f5955200-79d9-11eb-917c-5803b269a57e.gif" />
</div>

## Link to the live website
Check out a live version here [instaflame](https://myportfolioproj.dev/instaflame). You can sign up for an account or just use this test account
 ```sh
   username: testuser
   password: testuser
   ```


## TL;DR
This readme assumes you have mysql, node.js, python 3, and pip3 installed on your machine

## 🛠 Installation & Set Up

1. We are going to start with the backend. First set up an activate a virtual environment to run your server from.

   ```sh
   python3 -m venv env
   source /env/bin/activate
   ```

2. Install all required dependancies from requirements.txt

   ```sh
   pip3 -r install requirements.txt
   ```

3. Edit the settings.py file and change/add to the following values; ALLOWED_HOSTS, CORS_ORIGIN_WHITELIST, DATABASES

   ```sh
    //Add the hosts which should have access to your server

    ALLOWED_HOSTS=['localhost'] 

    CORS_ORIGIN_WHITELIST = [
        'http://localhost:3000',
    ]
    
    //
    DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'NAME_OF_DATABASE',
        'USER': 'NAME_DB_USER',
        'PASSWORD': 'PASSWORD_OF_DB_USER',
        'HOST': 'localhost',
        'PORT': '3306'
      }
    }
   ```

4. Migrate the DB information

   ```sh
   python3 manage.py migrate
   ```
   
5. Run server

   ```sh
   python3 manage.py runserver
   ```

## Frontend set up. Navigate to the client folder

1. Install all dependencies
  
  ```sh
   npm install
   ```

2. Change values in Utils.js so they point to where the server is being hosted
 
 ```sh
   // Assuming the server is running on localhost:8000
   const backendRoute = 'http://localhost:8000/api'
   const imageRoute = 'http://localhost:8000/images'
   ```
3. Start client
 ```sh
    npm run start
 ```
