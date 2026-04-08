import React from "react";
import FloatingShape from "./components/FloatingShape";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignupPage from "./pages/Signup";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import LoadingSpinner from "./components/Loadingspinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return children;
};

const App = () => {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
    return <LoadingSpinner />;
  }
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
          <Route path="/" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="/login" element={<RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>} />
          <Route path="/signup" element={<RedirectAuthenticatedUser>
            <SignupPage />
          </RedirectAuthenticatedUser>} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
        <Toaster />
      </div>

    </div>
  );
};

export default App;