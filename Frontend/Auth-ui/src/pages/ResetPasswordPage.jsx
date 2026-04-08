import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { Lock, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { resetPassword, error, isLoading } = useAuthStore();
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            await resetPassword(token, password);
            if (!token) {
                return <p className="text-white">Invalid or expired link</p>;
            }

            setSuccess(true);
            toast.success("Password reset successful");

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            toast.error(err.message || "Reset failed");
        }
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
                            Reset Password
                        </h2>

                        {!success ? (
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <p className="text-gray-400 text-sm text-center mb-4">
                                    Enter your new password below
                                </p>

                                <Input
                                    icon={Lock}
                                    type="password"
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <Input
                                    icon={Lock}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />

                                {error && (
                                    <p className="text-red-400 text-sm text-center">{error}</p>
                                )}

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
                                    {isLoading ? "Resetting..." : "Set New Password"}
                                </motion.button>

                            </form>
                        ) : (
                            <div className="text-center space-y-4">

                                {/* 🔥 Success UI */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto"
                                >
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </motion.div>

                                <p className="text-gray-300 text-sm">
                                    Password updated successfully 🎉
                                </p>

                                <p className="text-gray-500 text-xs">
                                    Redirecting to login...
                                </p>

                            </div>
                        )}

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;