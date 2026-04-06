import { motion } from "framer-motion";
import Input from "../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { User, Mail, Lock, Loader } from "lucide-react";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // 🔥 fake delay (UI testing)
        setTimeout(() => {
            setIsLoading(false);
            console.log(name, email, password);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        w-full max-w-sm sm:max-w-md
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.7)]
        overflow-hidden
      "
        >
            {/* 🔥 Header */}
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Create Account
                </h2>

                <form onSubmit={handleSignUp} className="space-y-4">
                    <Input
                        icon={User}
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <PasswordStrengthMeter password={password} />

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="
              mt-2 w-full py-3 
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
                            "Sign Up"
                        )}
                    </motion.button>
                </form>
            </div>

            {/* 🔥 Footer */}
            <div className="px-8 py-4 bg-white/5 border-t border-white/10 flex justify-center">
                <p className="text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-gray-200 hover:text-white transition"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default SignUpPage;