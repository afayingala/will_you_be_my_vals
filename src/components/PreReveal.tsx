import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PreReveal = () => {
  const [countdown, setCountdown] = useState(3);
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
      // Create confetti
      const emojis = ["💖", "💕", "💗", "💓", "💝", "🎉", "✨", "🌟"];
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      }));
      setConfetti(newConfetti);
    }
  }, [countdown]);

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-3xl"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          animate={{
            opacity: [1, 1, 0],
            y: window.innerHeight + 100,
            rotate: 360,
            scale: [1, 1.5, 0],
          }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {!showContent ? (
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {countdown}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-rose-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get ready... 🫣
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Almost There... 😏
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <img
              src="/src/assets/chibis/prereveal.png"
              alt="Pre-reveal chibi"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-rose-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-800 mb-4">
              The moment you've been waiting for... 🫣
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              One more slide... 💖
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-4 text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              😏
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💖
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🫣
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PreReveal;
