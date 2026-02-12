import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WelcomePage = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-2xl"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], y: -100, scale: [0, 1.5, 0] }}
          transition={{ duration: 3 }}
        >
          💖
        </motion.div>
      ))}

      <motion.div
        className="text-center z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Will You Be
        </motion.h1>
        <motion.h2
          className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 mb-8"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          My Valentine? 💖
        </motion.h2>
        
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src="/src/assets/chibis/welcome.png"
            alt="Welcome chibi"
            className="w-48 h-48 md:w-64 md:h-64 animate-float"
            onError={(e) => {
              // Fallback if image doesn't exist
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl text-rose-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Click "Next" to begin your surprise... 🫣💕
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            animate={{ rotate: [0, 14, -14, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            😏
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            💖
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -14, 14, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            🫶
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;
