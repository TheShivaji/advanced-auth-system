import { motion } from "framer-motion";

const FloatingShape = ({
    color = "bg-gray-500",
    size = "w-40 h-40",
    top = "10%",
    left = "10%",
    delay = 0,
}) => {
    return (
        <motion.div
            className={`absolute rounded-full ${color} ${size} opacity-20 blur-3xl`}
            style={{ top, left }}
            animate={{
                y: [0, -40, 40, 0],
                x: [0, 30, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration: 20 + Math.random() * 5,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
            }}
        />
    );
};

export default FloatingShape;