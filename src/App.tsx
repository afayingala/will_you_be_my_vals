import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; emoji: string; rotation: number }>>([]);
  const [showQuestion, setShowQuestion] = useState(false);

  const heartEmojis = ["💖", "💕", "💗", "💓", "💝", "❤️", "🫶", "💌"];

  // Floating hearts background
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Show question after initial text
  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Confetti explosion
  const triggerConfetti = () => {
    const emojis = ["💖", "💕", "💗", "🎉", "✨", "🌟", "💝", "❤️"];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: -10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      rotation: Math.random() * 360,
    }));
    setConfetti(newConfetti);
    setAccepted(true);
  };

  const moveNoButton = () => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    setNoPosition({ x: randomX, y: randomY });
  };

  if (accepted) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 text-center px-6 relative overflow-hidden">
        {/* Confetti */}
        {confetti.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-3xl md:text-4xl"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 1, y: 0, rotate: item.rotation, scale: 1 }}
            animate={{
              opacity: [1, 1, 0],
              y: window.innerHeight + 100,
              rotate: item.rotation + 720,
              scale: [1, 1.5, 0],
            }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Floating hearts */}
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-2xl"
            style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], y: -150, scale: [0, 1.2, 0] }}
            transition={{ duration: 4 }}
          >
            {heart.emoji}
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="z-10"
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 mb-6"
          >
            YAYYYYY 😭💖
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-gray-800 mb-8 font-medium"
          >
            You just made my whole Valentine's Day 🥺
            , I love youuuuu💘💞
          </motion.p>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 1, stiffness: 150 }}
          >
            <img
              src="/chibi-hug.png"
              alt="chibi hug"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-float"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-4 text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              😭
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
              🥺
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 text-center px-6 relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-2xl md:text-3xl"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], y: -200, scale: [0, 1.2, 0], rotate: 360 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      <div className="z-10 max-w-2xl">
        {/* Chibi image */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
        >
          <img
            src="/chibi-hug.png"
            alt="chibi holding heart"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto animate-float"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6"
        >
          Hi… I have a very serious question 😳💖
        </motion.h1>

        {/* Question text - fades in after delay */}
        <AnimatePresence>
          {showQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-2xl md:text-4xl text-gray-800 mb-4 font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Would you do me the honor of being my Valentine Ayuk Divine?🥺 
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-12 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Choose wisely 😏
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        {showQuestion && (
          <motion.div
            className="flex gap-6 justify-center items-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-xl md:text-2xl font-bold shadow-2xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Yes 💖
            </motion.button>

            <motion.button
              onMouseEnter={moveNoButton}
              animate={{ x: noPosition.x, y: noPosition.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-4 rounded-full text-xl md:text-2xl font-bold shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              No 😌
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
