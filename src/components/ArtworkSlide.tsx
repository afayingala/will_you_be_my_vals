import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ArtworkSlide = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-2xl"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          initial={{ opacity: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: [0, 1, 0], y: -150, scale: [0, 1.2, 0], rotate: 360 }}
          transition={{ duration: 4 }}
        >
          💕
        </motion.div>
      ))}

      <motion.div
        className="w-full max-w-3xl text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-8"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          A Little Artwork for You 🎨
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
        >
          <img
            src="/src/assets/chibis/artwork.png"
            alt="Artwork chibi"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-xl md:text-2xl text-gray-800 mb-4">
            Something cute I made just for you... 😊
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            But wait, there's more! Keep going... 🫣💖
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-4 text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 1, repeat: Infinity }}>
            🎨
          </motion.span>
          <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            💖
          </motion.span>
          <motion.span animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 1, repeat: Infinity }}>
            ✨
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ArtworkSlide;
