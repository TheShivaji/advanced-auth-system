import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] relative overflow-hidden">

            {/* 🔥 Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

            {/* 🔥 Spinner Container */}
            <div className="relative flex items-center justify-center">

                {/* Outer Ring */}
                <motion.div
                    className="absolute w-20 h-20 border border-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle Ring */}
                <motion.div
                    className="absolute w-16 h-16 border-2 border-white/20 border-t-white rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Dot */}
                <motion.div
                    className="w-3 h-3 bg-white rounded-full shadow-lg"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

            </div>

            {/* 🔥 Text */}
            <motion.p
                className="absolute bottom-10 text-gray-400 text-sm tracking-wide"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading, please wait...
            </motion.p>
        </div>
    );
};

export default LoadingSpinner;