# Task Management API 🚀 (Enhanced Version)

## 📌 Project Overview

This is a secure and scalable **Task Management RESTful API** built using Node.js and Express.js.
The application allows users to register, authenticate, and manage their tasks efficiently.

### 🔥 Enhanced Features Added:

* ⏰ Real-time task reminders (event-driven simulation)
* 🏷️ Task categorization and tagging
* 🌐 External webhook integration with retry logic

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
* axios (Webhook requests)

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
│   ├── userModel.js
│   ├── taskModel.js
│
│── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│
│── utils/
│   ├── reminder.js   👈 NEW
│
│── .env
│── server.js
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JJSinghRathore/Conversely
cd task-manager
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000

JWT_SECRET=secret_key

PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=pass123
PG_DATABASE=taskdb
PG_PORT=5432

MONGO_URI=mongodb://localhost:27017/taskdb

WEBHOOK_URL=https://webhook.site/YOUR_UNIQUE_URL
```

---

### 4️⃣ Start Server

```bash
npm run dev
```

Server runs at:

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
4. Token is used in headers

```
Authorization: Bearer <token>
```

---

## 📌 API Endpoints

### 👤 Auth Routes

#### Register

```
POST /api/auth/register
```

#### Login

```
POST /api/auth/login
```

#### Profile

```
GET /api/auth/profile
```

---

## ✅ Task Routes

#### Create Task

```
POST /api/tasks
```

#### Get All Tasks

```
GET /api/tasks
```

#### Get Single Task

```
GET /api/tasks/:id
```

#### Update Task

```
PATCH /api/tasks/:id
```

#### Delete Task

```
DELETE /api/tasks/:id
```

---

## 🆕 Enhanced Features

---

### ⏰ Task Reminder System

* When a task has a `dueDate`, a reminder is scheduled
* Reminder triggers **1 hour before deadline**
* Implemented using `setTimeout()` (event-driven simulation)
* Logs message in console
* Can also trigger webhook

---

### 🏷️ Category & Tags

* Predefined categories:

  * Work
  * Personal
  * Urgent

* Multiple tags supported

#### Example:

```json
{
  "title": "Fix Bug",
  "category": "Work",
  "tags": ["urgent", "clientA"]
}
```

---

### 🔍 Filter Tasks

```
GET /api/tasks/filter?category=Work
GET /api/tasks/filter?tag=urgent
```

---

### 🌐 Webhook Integration

* Triggered when task status = `completed`
* Sends POST request to external service

#### Payload:

```json
{
  "id": "task_id",
  "title": "Task title",
  "userId": "user_id",
  "completedAt": "timestamp"
}
```

---

### 🔁 Retry Logic

* If webhook fails → retry 3 times
* Uses delay (basic exponential backoff)

---

## 📊 Database Design

### PostgreSQL (Users)

* id (UUID)
* email (unique)
* password (hashed)

---

### MongoDB (Tasks)

* title
* description
* dueDate
* status
* category
* tags
* userId

---

## ⚠️ Error Handling

Global error handling middleware:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

---

## ✔️ Validation

* Email format validation
* Required fields validation
* Password validation
* Task validation

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* User-specific access control

---

## 🧠 Design Decisions

* PostgreSQL for structured user data
* MongoDB for flexible task storage
* MVC architecture
* Middleware for separation of concerns
* setTimeout used for lightweight event-driven simulation
* Webhook retry ensures reliability

---

## 📌 Limitations

* Reminder lost if server restarts
* No persistent queue

---

## 🚀 Future Improvements

* Use Redis + BullMQ
* Email/SMS notifications
* Role-based access
* Priority system

---

## 🎥 Demo Video

https://drive.google.com/file/d/11jt8hHlJlZ4m88gM_iz_Dm1nxYOXwbSJ/view?usp=drive_link
---

## 🚀 Features Demonstrated

* User registration & login
* JWT authentication
* CRUD operations
* Authorization
* Reminder system
* Category & tags
* Webhook integration

---

## 📌 Author

Jatin Jai Singh Rathore
