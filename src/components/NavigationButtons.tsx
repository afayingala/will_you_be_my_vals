import { motion } from "framer-motion";

interface Props {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ currentSlide, totalSlides, onPrevious, onNext }: Props) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        onClick={onPrevious}
        disabled={isFirst}
        className={`px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all ${
          isFirst
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500"
        }`}
        whileHover={!isFirst ? { scale: 1.05 } : {}}
        whileTap={!isFirst ? { scale: 0.95 } : {}}
      >
        ← Back
      </motion.button>

      <div className="flex items-center gap-2 px-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-rose-500 w-8" : "bg-gray-300"
            }`}
            initial={false}
            animate={{ width: index === currentSlide ? 32 : 8 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={isLast}
        className={`px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all ${
          isLast
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:from-rose-500 hover:to-pink-500"
        }`}
        whileHover={!isLast ? { scale: 1.05 } : {}}
        whileTap={!isLast ? { scale: 0.95 } : {}}
      >
        Next →
      </motion.button>
    </motion.div>
  );
};

export default NavigationButtons;
