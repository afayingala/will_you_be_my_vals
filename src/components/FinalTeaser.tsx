import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FinalTeaser = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);
  const emojis = ["💖", "💕", "💗", "💓", "💝", "❤️", "🫶", "😍"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        },
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-3xl md:text-4xl"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          initial={{ opacity: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: -200,
            scale: [0, 1.5, 1.5, 0],
            rotate: 720,
          }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      <motion.div
        className="w-full max-w-4xl text-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 mb-8"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          The Final Reveal 🎁
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <img
            src="/src/assets/chibis/final_teaser.png"
            alt="Final chibi"
            className="w-56 h-56 md:w-72 md:h-72 mx-auto animate-float"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.div
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-rose-400 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            className="text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Soft for now… but soon, this will be yours in real life 🫣❤️
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Can't wait to see you holding it 😏💌
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            😏
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💖
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🫶
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-12 text-lg md:text-xl text-rose-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Happy Valentine's Day, my love! 💕✨
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FinalTeaser;
