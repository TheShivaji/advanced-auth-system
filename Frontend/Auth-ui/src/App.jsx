import React from "react";
import FloatingShape from "./components/FloatingShape";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignupPage from "./pages/Signup";
import EmailVerificationPage from "./pages/EmailVerificationPage";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f0f]">

      {/* 🔥 subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0f0f0f] to-gray-800" />

      {/* 🔥 floating shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingShape color="bg-gray-600" size="w-72 h-72" top="10%" left="20%" delay={0} />
        <FloatingShape color="bg-gray-500" size="w-60 h-60" top="60%" left="70%" delay={2} />
        <FloatingShape color="bg-gray-700" size="w-80 h-80" top="30%" left="50%" delay={4} />
      </div>

      {/* 💻 content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;