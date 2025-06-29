import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdRefreshCircle } from 'react-icons/io';

const affirmations = [
  "You are enough just as you are.",
  "You are doing your best, and that is enough.",
  "Your feelings are valid.",
  "You are strong, even on tough days.",
  "Every day is a new beginning.",
  "You deserve to be happy.",
  "You are not alone in how you feel.",
  "You bring value to the world.",
];

const AffirmationSpinner = () => {
  const [current, setCurrent] = useState(affirmations[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinAffirmation = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      setCurrent(newAffirmation);
      setIsSpinning(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-md text-center font-secondary">
      <motion.h3 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-2xl font-semibold text-primary mb-6"
      >
        Positive Affirmation
      </motion.h3>

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-700 italic mb-6"
      >
        "{current}"
      </motion.div>

      <motion.button
        onClick={spinAffirmation}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        disabled={isSpinning}
        className="bg-primary text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto disabled:opacity-50"
      >
        <IoMdRefreshCircle size={20} />
        {isSpinning ? "Spinning..." : "Spin Again"}
      </motion.button>
    </div>
  );
};

export default AffirmationSpinner;
