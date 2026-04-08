import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";


const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { isLoading, forgotPassword } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    };

    return (
        <div className="relative w-full max-w-sm sm:max-w-md">

            {/* 🔥 Glow Border */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
            bg-[#0f0f0f]/90 backdrop-blur-2xl
            border border-white/10
            rounded-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.8)]
            overflow-hidden
          "
                >
                    <div className="p-8">

                        {/* 🔥 Heading */}
                        <h2 className="text-3xl font-bold text-center text-white mb-4">
                            Forgot Password
                        </h2>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <p className="text-gray-400 text-sm text-center mb-4">
                                    Enter your email and we'll send you a reset link
                                </p>

                                <Input
                                    icon={Mail}
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                    w-full py-3 
                    bg-white text-black font-semibold
                    rounded-xl
                    hover:bg-gray-200
                    transition
                    shadow-lg shadow-black/50
                  "
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader className="animate-spin mx-auto" size={20} />
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <div className="text-center space-y-4">

                                {/* 🔥 Success Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto"
                                >
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </motion.div>

                                <p className="text-gray-300 text-sm">
                                    If an account exists for{" "}
                                    <span className="text-white">{email}</span>,
                                    you’ll receive a reset link shortly.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* 🔥 Footer */}
                    <div className="px-8 py-4 bg-white/5 border-t border-white/10 flex justify-center">
                        <Link
                            to="/login"
                            className="text-sm text-gray-400 hover:text-white transition flex items-center"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Login
                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;