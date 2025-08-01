# 🍰 Cakely - Backend

Cakely is a secure authentication service that provides user registration, login, email verification, password reset, and role-based access control (RBAC). This backend exposes RESTful APIs and is built following clean code architecture and security best practices.

## 🔧 Technologies Used

- **Node.js** with Express.js
- **MongoDB Atlas** (Database)
- **JWT** for authentication
- **bcryptjs** for password hashing
- **nodemailer** for email services
- **Swagger (OpenAPI)** for API documentation
- **Docker** (to be added for containerization)
- **Jest / Supertest** for backend testing

## 🚀 Getting Started

### 📁 Project Setup

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/cakely-backend.git
cd cakely-backend
```

2. **Install Dependencies**

```
npm install

```

3. **Configure Environment**

```
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

2. **Run the App**

```
npm run dev

```

### 📘 API Documentation

API is documented with Swagger UI.
```
🔗 Swagger UI

```

### 👤 Team Members & Contributions

### 📁 Folder Structure
```
cakely-backend/
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
├── utils/
├── config/
├── tests/
├── swagger.js
└── server.js
```

### 📦 Features Implemented

    1. User Registration with email/password

    2. Password hashing with bcrypt

    3. Login with JWT authentication

    4. Protected routes middleware

    5. Password reset via email

    6. Email verification with secure token

    7. Role-based access (admin/user)

    8. Swagger Documentation

    9. Environment configuration with .env

    10. Logging (console-based)

### 🔐 Thanks for diving into Cakely Backend! ⚙️ Secure coding and smooth API rides ahead! 🚀🛠️
