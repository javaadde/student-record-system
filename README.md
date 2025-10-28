<div align='center'>
<h1 align="center"> 📚 Student Record System API </h1> 
</div>

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)

**A RESTful API built with Express, TypeScript, and MongoDB for managing student records**

[Features](#-features) • [Installation](#-installation) • [API Endpoints](#-api-endpoints) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Overview

A robust and scalable Student Record Management System API that provides full CRUD operations for managing student information. Built with modern technologies and TypeScript for type safety.

## 🎯 Features

- ✅ **Complete CRUD Operations** - Create, Read, Update student records
- 🔍 **Student Search** - Find students by ID or list all students
- 🎨 **Type-Safe** - Built with TypeScript for better code quality
- 🚀 **Fast & Efficient** - Powered by Express and MongoDB
- 🌐 **CORS Enabled** - Cross-origin requests supported
- 📦 **MongoDB Integration** - Persistent data storage with Mongoose

## 🛠️ Tech Stack

<div align="left">

![Express](https://img.shields.io/badge/Express-5.1.0-black?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8.19.2-green?style=flat&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat&logo=typescript)
![Node](https://img.shields.io/badge/Node.js-LTS-green?style=flat&logo=node.js)

</div>

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Middleware:** CORS
- **Environment:** dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) or MongoDB Atlas account
- npm or yarn package manager

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/javaadde/student-record-system.git
cd student-record-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/student-records
```

### 4. Start the development server

```bash
npm run dev
```

The API will be running at `http://localhost:8080`

## 📡 API Endpoints

### Base URL

```
http://localhost:8080/api/student
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create` | Create a new student record |
| `GET` | `/find` | Get all student records |
| `GET` | `/find/:id` | Get a specific student by ID |
| `PUT` | `/update/:id` | Update a student record |

## 💡 Usage Examples

### Create a Student

```bash
POST http://localhost:8080/api/student/create
Content-Type: application/json

{
  "name": "John Doe",
  "age": 22,
  "course": "Computer Science",
  "email": "john.doe@example.com"
}
```

**Response:**

```json
{
  "message": "student is created",
  "cretedStudent": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "age": 22,
    "course": "Computer Science",
    "email": "john.doe@example.com"
  }
}
```

### Get All Students

```bash
GET http://localhost:8080/api/student/find
```

### Get Specific Student

```bash
GET http://localhost:8080/api/student/find/:id
```

### Update a Student

```bash
PUT http://localhost:8080/api/student/update/:id
Content-Type: application/json

{
  "name": "John Smith",
  "age": 23,
  "course": "Software Engineering",
  "email": "john.smith@example.com"
}
```

## 📁 Project Structure

```
student-record-system/
├── src/
│   ├── config/
│   │   └── db.ts              # Database connection
│   ├── controllers/
│   │   └── student.controller.ts
│   ├── interfaces/
│   │   └── student.interface.ts
│   ├── models/
│   │   └── student.model.ts
│   ├── routes/
│   │   └── student.route.ts
│   └── server.ts              # Entry point
├── dist/                      # Compiled JavaScript
├── node_modules/
├── .env                       # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## 📝 Student Schema

```typescript
interface IStudent {
  name: string;      // Student's full name
  age: number;       // Student's age
  course: string;    // Course name
  email: string;     // Student's email address
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**javaaadde**

---

<div align="center">

**Made with ❤️ using TypeScript and Express**

⭐ Star this repo if you find it helpful!

</div>
