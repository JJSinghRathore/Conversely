# Task Management API 🚀

## 📌 Project Overview

This is a secure and scalable **Task Management RESTful API** built using Node.js and Express.js.
The application allows users to register, authenticate, and manage their tasks efficiently.

This project demonstrates:

* REST API design
* Authentication using JWT
* Integration with both SQL and NoSQL databases
* Proper error handling and validation

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL (User Data)
* MongoDB (Task Data)
* bcrypt.js (Password Hashing)
* jsonwebtoken (JWT Authentication)
* dotenv (Environment Variables)
* express-validator (Validation)

---

## 📂 Folder Structure

```
project-root/
│── config/
│   ├── pg.js
│   ├── mongo.js
│
│── controllers/
│   ├── authController.js
│   ├── taskController.js
│
│── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── validationMiddleware.js
│
│── models/
│   ├── userModel.js (PostgreSQL)
│   ├── taskModel.js (MongoDB)
│
│── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│
│── .env
│── server.js
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <https://github.com/JJSinghRathore/Conversely>
cd task-manager
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root folder:

```
PORT=5000

JWT_SECRET=secret_key

PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=pass123
PG_DATABASE=taskdb
PG_PORT=5432

MONGO_URI=mongodb://localhost:27017/taskdb
```

---

### 4️⃣ Start Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication

JWT-based authentication is implemented.

### Flow:

1. User registers
2. User logs in
3. Server returns JWT token
4. Token is used in headers:

```
Authorization: Bearer <token>
```

---

## 📌 API Endpoints

### 👤 Auth Routes

#### Register User

```
POST /api/auth/register
```

Body:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

#### Login User

```
POST /api/auth/login
```

---

#### Get Profile

```
GET /api/auth/profile
```

(Protected Route)

---

### ✅ Task Routes

#### Create Task

```
POST /api/tasks
```

---

#### Get All Tasks

```
GET /api/tasks
```

---

#### Get Single Task

```
GET /api/tasks/:id
```

---

#### Update Task

```
PATCH /api/tasks/:id
```

---

#### Delete Task

```
DELETE /api/tasks/:id
```

---

## 📊 Database Design

### PostgreSQL (Users)

* id (UUID)
* email (unique)
* password (hashed)

### MongoDB (Tasks)

* title
* description
* dueDate
* status (pending/completed)
* userId (reference)

---

## ⚠️ Error Handling

Global error handling middleware implemented for:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

---

## ✔️ Validation

* Email format validation
* Required fields validation
* Password length validation
* Task fields validation

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* User-specific data access

---

## 🧠 Design Decisions

* PostgreSQL used for structured user data
* MongoDB used for flexible task storage
* MVC architecture followed
* Middleware used for clean code separation

---

🎥 Demo Video

Add your demo video link here:

<https://drive.google.com/file/d/1omZ4i9drK3hQZsq9wZXlUpqTx3c2-cIF/view?usp=drive_link>


## 🚀 Features Demonstrated

* User registration & login
* JWT authentication
* CRUD operations on tasks
* Authorization (user cannot access others' tasks)
* Validation & error handling

---

## 📌 Author

Jatin Jai Singh Rathore

