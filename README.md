<div align="center">

# 🔐 MERN Advanced Auth System
**Production-Grade Authentication built with React, Node.js, and HTTP-Only Cookies.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 👁️ Preview

> 🖼️ **Hero Image Space:** [Dashboard](./assets/1.png)

### Auth Flows & UI
> 🖼️ **Demo Image Space:**  [Auth Flow](./assets/2.png)

---

## 🚀 Features

This isn't just another basic JWT tutorial project. It is built with enterprise-level security practices in mind:

- 🛡️ **Advanced Security:** JWT integration using **HTTP-Only Cookies** (Prevents XSS attacks).
- 🔄 **State Management:** Blazing fast global state handling using **Zustand**.
- 📧 **Email Verification:** OTP-based email verification using Nodemailer & Mailtrap.
- 🔑 **Password Recovery:** Secure Forgot/Reset password flows with temporary tokens.
- 🚧 **Protected Routes:** React Router integration to protect private endpoints.
- 🎨 **Modern UI:** Responsive, dark-mode minimalist UI built with Tailwind CSS.

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Zustand (State Management)
- Tailwind CSS
- React Router DOM
- Axios & React Hot Toast

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) & bcryptjs
- Nodemailer

---

## ⚙️ Installation & Setup

Want to run this locally? Follow these steps:

**1. Clone the repository**
```bash
git clone [https://github.com/TheShivaji/MERN-Advanced-Auth.git](https://github.com/TheShivaji/MERN-Advanced-Auth.git)
cd MERN-Advanced-Auth

**2. Install dependencies**
```bash
for frontend:
cd Frontend
npm install
for backend:
cd ../Backend
npm install
``` 
**3. Configure environment variables**
- Create a `.env` file in the `Backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Mailtrap credentials for email verification
MAILTRAP_HOST=smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
```

**4. Start the development servers**
```bash
# Start backend server
cd Backend
npm run dev
# In a new terminal, start frontend server
cd ../Frontend/Auth-ui
npm run dev
```

👨‍💻 Author
Shivaji Jagdale
Full-Stack Developer 🚀