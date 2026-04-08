import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";


const EmailVerificationPage = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const { isLoading, verifyEmail, error } = useAuthStore();
    const handleChange = (index, value) => {
        const newCode = [...code];

        // Paste support
        if (value.length > 1) {
            const pasted = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pasted[i] || "";
            }
            setCode(newCode);

            const lastFilled = newCode.findLastIndex((d) => d !== "");
            const focusIndex = lastFilled < 5 ? lastFilled + 1 : 5;
            inputRefs.current[focusIndex]?.focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join("");
        try {
            await verifyEmail(verificationCode);
            navigate("/");
            toast.success("Email verified successfully");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code.every((d) => d !== "")) {
            handleSubmit(new Event("submit"));
        }
    }, [code]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
        w-full max-w-sm sm:max-w-md
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        overflow-hidden
      "
        >
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-center text-white">
                    Verify Email
                </h2>

                <p className="text-center text-gray-400 mb-6 text-sm">
                    Enter the 6-digit code sent to your email
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* 🔥 OTP BOXES */}
                    <div className="flex justify-between gap-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="
                  w-12 h-12
                  text-center text-xl font-semibold
                  bg-black/40
                  border border-white/20
                  rounded-xl
                  text-white

                  focus:outline-none
                  focus:ring-2 focus:ring-white/40
                  focus:border-white/40

                  transition
                "
                            />
                        ))}
                    </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    {/* 🔥 BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isLoading || code.some((d) => !d)}
                        className="
              w-full py-3
              bg-white text-black font-semibold
              rounded-xl
              hover:bg-gray-200
              transition
              shadow-lg shadow-black/50
              disabled:opacity-50
            "
                    >
                        {isLoading ? "Verifying..." : "Verify Email"}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default EmailVerificationPage;