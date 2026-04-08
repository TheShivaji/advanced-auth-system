import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useAuthStore();
    const handleLogin = async(e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
        max-w-md w-full
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        overflow-hidden
      "
        >
            <div className="p-8">

                {/* Heading */}
                <h2 className="
          text-3xl font-bold text-center text-white mb-6
        ">
                    Welcome Back
                </h2>

                <form onSubmit={handleLogin}>
                    <Input
                        icon={Mail}
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        icon={Lock}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Forgot */}
                    <div className="flex justify-end mb-4">
                        <Link
                            to="/forgot-password"
                            className="text-xs text-gray-400 hover:text-white transition"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isLoading}
                        className="
              w-full py-3
              bg-white text-black font-semibold
              rounded-xl
              hover:bg-gray-200
              transition
              shadow-lg shadow-black/50
            "
                    >
                        {isLoading ? (
                            <Loader className="animate-spin mx-auto" size={20} />
                        ) : (
                            "Login"
                        )}
                    </motion.button>
                </form>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-white/5 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-gray-200 hover:text-white transition"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default LoginPage;