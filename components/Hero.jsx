"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {





  /* — animation presets — */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const swapText = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section
      className="relative mt-10 flex items-center justify-center min-h-screen text-center text-white bg-cover bg-left-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg2.jpg')",backgroundPositionX:"right"
       }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0" />

      <motion.div
        className="relative z-10 max-w-5xl px-6 sm:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* headline */}
        <motion.div className="mb-8" variants={item}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            <AnimatePresence mode="wait">
              <span className="inline-block text-[#ffffff] text-4xl sm:text-5xl md:text-7xl">ABSOLUTE</span>
              <motion.span
                initial="initial"
                animate="animate"
                exit="exit"
                className="inline-block text-[#ffffff] text-4xl sm:text-5xl md:text-7xl"
              >
                 STOCK MARKET INSTITUTE
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        <motion.div className="mb-8" variants={item}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            <AnimatePresence mode="wait">
              <motion.span
                initial="initial"
                animate="animate"
                exit="exit"
                className="inline-block text-green-500 text-4xl sm:text-5xl md:text-7xl"
              >
                Master the Markets
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

       
        {/* benefits */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={item}
        >
          {[
            "Beginner-friendly",
            "Real-time practice",
            "No fluff content",
            "Lifetime mentorship",
          ].map((b, i) => (
            <motion.div
              key={b}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-black/20 text-[#ffffff]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              🔹 {b}
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          variants={item}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="py-3 px-10 text-lg font-semibold text-white rounded-full bg-green-700 hover:bg-[#0052CC] transition"
          >
            START
          </motion.button>
          <Link
            href="/contact"
            className="py-3 px-10 text-lg font-semibold rounded-full border border-[#ffffff] bg-white text-green-700 hover:bg-black hover:text-white transition"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* trust indicators */}
        <motion.div
          className="flex justify-center gap-10 text-[#ffffff]"
          variants={item}
        >
          <div className="text-center bg-green-700/80 p-1 rounded-lg">
            <div className="text-3xl font-extrabold  rounded-sm text-white">1,000+</div>
            <div className="text-sm font-light">Students Trained</div>
          </div>
          <div className="text-center bg-green-700/80 p-1 rounded-lg">
            <div className="text-3xl font-extrabold text-white">95%</div>
            <div className="text-sm font-light">Success Rate</div>
          </div>
          <div className="text-center bg-green-700/80 p-1 rounded-lg">
            <div className="text-3xl font-extrabold text-white">5+</div>
            <div className="text-sm font-light">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
