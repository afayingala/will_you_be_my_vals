import { letters } from "../data/letters";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  index: number;
}

const MiniLetter = ({ index }: Props) => {
  const letter = letters[index];
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev.slice(-10), // Keep only last 10
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (!letter) return null;

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 relative overflow-hidden p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sparkle effects */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-xl"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: 360 }}
          transition={{ duration: 1.5 }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        className="w-full max-w-2xl p-8 md:p-12 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl shadow-2xl border-4 border-rose-300 flex flex-col items-center text-center relative"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 text-2xl">💌</div>
        <div className="absolute top-2 right-2 text-2xl">💌</div>
        <div className="absolute bottom-2 left-2 text-2xl">💌</div>
        <div className="absolute bottom-2 right-2 text-2xl">💌</div>

        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <img
            src={`/src/assets/chibis/${letter.chibi}`}
            alt="Letter chibi"
            className="w-32 h-32 md:w-40 md:h-40 animate-float"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-gray-800 whitespace-pre-line leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {letter.text}
        </motion.p>

        <motion.div
          className="mt-6 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💖
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MiniLetter;
