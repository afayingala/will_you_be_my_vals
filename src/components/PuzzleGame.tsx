import { useState } from "react";
import { puzzles } from "../data/puzzles";
import { motion, AnimatePresence } from "framer-motion";

const PuzzleGame = () => {
  const puzzle = puzzles[0];
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    setAttempts((prev) => prev + 1);
    if (answer.toLowerCase().trim() === puzzle.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      if (attempts >= 2 && puzzle.hint) {
        setShowHint(true);
      }
      // Shake animation feedback
      const input = document.getElementById("puzzle-input");
      if (input) {
        input.classList.add("animate-pulse");
        setTimeout(() => input.classList.remove("animate-pulse"), 500);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-purple-300 p-8 md:p-12 flex flex-col items-center text-center"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <img
            src={`/src/assets/chibis/${puzzle.chibi}`}
            alt="Puzzle chibi"
            className="w-32 h-32 md:w-40 md:h-40 animate-float"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🧩 Mini Puzzle Time! 🧩
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {puzzle.question}
        </motion.p>

        <AnimatePresence>
          {showHint && !isCorrect && (
            <motion.div
              className="mb-4 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-sm md:text-base text-yellow-800">
                💡 Hint: {puzzle.hint}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full max-w-md mb-6">
          <input
            id="puzzle-input"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full border-4 border-purple-300 p-4 rounded-xl text-lg focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-200 transition-all"
            placeholder="Type your answer here... 🫣"
            disabled={isCorrect}
          />
        </div>

        <motion.button
          onClick={checkAnswer}
          disabled={isCorrect || !answer.trim()}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          whileHover={{ scale: isCorrect ? 1 : 1.05 }}
          whileTap={{ scale: isCorrect ? 1 : 0.95 }}
        >
          {isCorrect ? "🎉 Correct!" : "Submit Answer"}
        </motion.button>

        <AnimatePresence>
          {isCorrect && (
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-400 rounded-xl"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-green-700 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                🎉 You unlocked the hint! 🫣💖
              </motion.p>
              <motion.p
                className="text-lg text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Keep going to see what's next... 😏
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PuzzleGame;
