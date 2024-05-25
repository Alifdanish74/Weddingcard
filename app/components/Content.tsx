"use client";
import React from "react";
import "../fonts.css";
import { motion } from "framer-motion";

type Props = {};

function Content({}: Props) {
  return (
    <div className="flex flex-col z-10 pb-10 pt-20 text-center h-screen main-card text-black justify-center items-center bg-main_bg_image">
      <motion.div
        initial={{
          y: -30,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
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
          transition={{ duration: 1 }}
        >
          Alif Danish
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
                      whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, opacity: 1 },
            }}
        >
          {" "}
          &{" "}
        </motion.button>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {" "}
          Nur Iqkriany
        </motion.p>
      </div>
      <motion.p
        initial={{
          y: -30,
          opacity: 0,
        }}
        transition={{ delay: 0.8, duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl mb-5 font-medium text-transform: uppercase font-Libre"
      >
        <span>Sabtu</span>
        <br />
        <span>10 </span>
        <span> August</span>
        <span> 2024</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg font-Libre font-normal"
      >
        {" "}
        Gamuda Garden, Rawang{" "}
      </motion.p>
    </div>
  );
}

export default Content;
