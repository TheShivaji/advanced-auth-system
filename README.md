<div align="center">

# 🔐 MERN Advanced Auth System

### 🚀 Production-Grade Authentication System using MERN Stack

**Secure • Scalable • Real-World Ready**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🎯 Why This Project?

Most authentication tutorials only cover the basics.
This project is built with **production-level practices** used in real-world applications:

* 🔐 Secure authentication using **HTTP-only cookies**
* 🔄 Token lifecycle management
* 📧 Email verification workflows
* 🧱 Scalable backend architecture

---

## 👁️ Preview

> 🖼️ Dashboard UI
> ![Dashboard](./assets/1.png)

> 🖼️ Authentication Flow
> ![Auth Flow](./assets/2.png)

---

## 🚀 Features

### 🛡️ Security First

* JWT authentication with **HTTP-only cookies**
* Protection against **XSS attacks**
* Secure password hashing using bcrypt

### 🔄 Authentication Flows

* ✅ Signup & Login system
* 📧 Email verification (OTP-based)
* 🔑 Forgot / Reset Password
* 🚧 Protected Routes

### ⚡ State Management

* Zustand for lightweight and fast global state

### 🎨 Modern UI

* Responsive design with Tailwind CSS
* Clean dark mode UI

---

## 📌 Highlights

✔ Production-grade authentication system
✔ Secure cookie-based JWT implementation
✔ Clean & scalable folder structure
✔ Real-world auth flows (OTP, Reset, Protected routes)

---

## 🏗️ Architecture

Client (React) → API (Express) → Database (MongoDB)
                                            ↓
                                    Auth Middleware (JWT + Cookies)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Zustand
* Tailwind CSS
* React Router DOM
* Axios & React Hot Toast

### Backend

* Node.js & Express.js
* MongoDB & Mongoose
* JWT & bcryptjs
* Nodemailer (Mailtrap)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/TheShivaji/MERN-Advanced-Auth.git
cd MERN-Advanced-Auth
```

### 2️⃣ Install Dependencies

```bash
# Frontend
cd Frontend
npm install

# Backend
cd ../Backend
npm install
```

### 3️⃣ Environment Variables

Create `.env` file inside **Backend**:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

MAILTRAP_HOST=smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
```

---

### 4️⃣ Run the Project

```bash
# Backend
cd Backend
npm run dev

# Frontend (new terminal)
cd ../Frontend/Auth-ui
npm run dev
```

---

## 👨‍💻 Author

### **Shivaji Jagdale**

🚀 Full-Stack Developer | 🤖 AI Builder | ⚡ MERN Specialist

* 🧠 Building **Production-Ready Systems**
* 🔐 Focused on **Secure Backend & Auth Systems**
* 🤖 Exploring **Agentic AI & GenAI**
* 💡 Passionate about solving real-world problems

---

## 🌐 Connect with Me

* 🐙 GitHub: https://github.com/TheShivaji
* 💼 LinkedIn: https://linkedin.com/in/your-link
* 📧 Email: [your-email@example.com](mailto:your-email@example.com)

---

## ⭐ Support

If you like this project:

⭐ Star this repo
🍴 Fork it
📢 Share it

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

---

