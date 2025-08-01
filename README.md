# 🎂 Cakely - Backend

Welcome to Cakely Backend! 🍰 This service powers the modern cake ordering platform with secure and scalable RESTful APIs. It handles user authentication, authorization, cake management, and all core business logic, enabling a seamless and secure experience for both customers and admins.

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
├── config/
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

---

## 🔗 Backend Link

- **Frontend Repository:** [Cakely Frontend](https://github.com/ThasuniInduma/web_frontend)

---

### 🔐 Thanks for diving into Cakely Backend! ⚙️ Secure coding and smooth API rides ahead! 🚀🛠️
