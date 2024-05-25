// components/Entrance.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface EntranceProps {
  onClose: () => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -1000 },
};

const Entrance: React.FC<EntranceProps> = ({ onClose, setIsPlaying }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
    setIsPlaying(true);
    setTimeout(onClose, 800); // Ensure this matches the transition duration
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="flex flex-col pb-10 pt-20 text-center h-screen main-card text-black justify-center items-center bg-main_bg_image_blur"
    >
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" card-opening"
      >
        <p className="text-lg text-tranform: uppercase font-['Cinzel']">
          Walimatulurus
        </p>
      </motion.div>
      <div className="mb-5 text-7xl font-Tangerine">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Alif Danish
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {" "}
          &{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {" "}
          Nur Iqkriany
        </motion.p>
      </div>

      <button
        onClick={handleClick}
        className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Buka
      </button>
    </motion.div>
  );
};

export default Entrance;
