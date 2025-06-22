# MELODYVERSE - Full Stack Login and Signup Application

Welcome to **MelodyVerse**, a simple full-stack web app built with **React.js**, **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. 

# PROJECT OVERVIEW

Users can easily sign up by providing their name, email, and password, and later log in using their credentials. After logging in successfully, they are redirected to a simple home page.

To keep users secure, the application uses JWT tokens for session handling and stores all user data safely in a MongoDB database.

This project was built using a modern tech stack:

  -> JWT (JSON Web Token) is used to securely handle authentication.

  -> The frontend is developed using React.js, making the user interface interactive and dynamic.

  -> Node.js and Express.js are used for building the backend APIs.

  ->MongoDB is used to store and manage user information in the database.

  ->Tailwind CSS ensures the frontend is well-styled and responsive across different screen sizes.

  # PROJECT STRUCTURE

  MELODYVERSE/

  |--->connectverse-backend/-> Backend (Node.js + MongoDb + Express)

  |--->melodyverse2/-> Frontend (React + Tailwind CSS)

  |--->README.md/-> This File 

  # SETUP INSTRUCTIONS

  -->Backend Setup (Node.js + Express + MongoDB)
      STEP 1 :
       - Go to the backend folder
       -  Navigate to the folder where your backend code is located. 
       -  For example:
          **cd connectverse-backend**
      STEP 2 :
       - Install the dependencies
       - MaKe sure Node.js is installed, then run :
       - **npm install**
      STEP 3 :
       - Create a .env file 
       - In the root of your backend folder, create a file named .env and add the following environment variables:
       - **PORT=5000**
         **MONGO_URI=your_mongodb_connection_string**
         **JWT_SECRET=your_jwt_secret_key** 
      STEP 4 :
       - Start the backend server
       - To start your backend, run:
       - **npm run dev**
       - You should see:
         MongoDB connected successfully
         Server is running on port 5000
   
   -->Frontend Setup (React + Tailwind CSS)
       STEP 1 :
        - Open Terminal & Navigate to the frontend project folder
        - **cd melodyverse2/vite-project**
       STEP 2 :
        - Make sure you have Node.js installed on your system. Then run:
        - **npm install**
        - This will install React, Tailwind CSS, React Router, Axios, React Toastify, and other required packages.
       STEP 3 : 
       - Start the frontend server
       - **npm run dev**
       - If everything is set up correctly, your browser should automatically open at:
       - **http://localhost:5173**

   # HOW TO TEST THE API

   You can test the backend API using Thunder Client (VS Code extension)
   --> **Register a USER**
      - Method: POST
      - Endpoint: http://localhost:5000/api/register
      - Body (JSON):  
      - {
        "name": "Test User",
        "email": "test@example.com",
        "password": "password123"
        }

   --> **Login USER**
      - Method: POST
      - Endpoint: http://localhost:5000/api/login
      - Body (JSON):
      - {
        "email": "test@example.com",
        "password": "password123"
        }
      - If credentials are valid, you’ll get a JWT token in the response.  
 
          


 


   
 

