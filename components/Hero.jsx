'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ['Learn Trading', 'Earn Smart', 'Build Wealth'];

  /* — text carousel — */
  useEffect(() => {
    const id = setInterval(
      () => setCurrentText((i) => (i + 1) % rotatingTexts.length),
      2_500
    );
    return () => clearInterval(id);
  }, []);

  /* — animation presets — */
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: .2, delayChildren: .2 } } };
  const item      = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: .6, ease: 'easeOut' } } };
  const swapText  = { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 } };

  return (
    <section
      className="relative mt-10 flex items-center justify-center min-h-screen text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg2.jpg')" }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

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
              <motion.span
                key={currentText}
                variants={swapText}
                initial="initial"
                animate="animate"
                exit="exit"
                className="inline-block text-[#ffffff] text-4xl sm:text-5xl md:text-8xl"
              >
                {rotatingTexts[currentText]}
              </motion.span>
            </AnimatePresence>
            <span className="text-[#ffffff]">.</span>
            <br />
            <span className="text-[#1b6fff]">Master the Markets</span>
          </h1>
        </motion.div>

        {/* sub-copy */}
        <motion.p
          className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl font-light"
          variants={item}
        >
          Join our practical, result-driven trading classes and learn real-world
          strategies in Options, Technical Analysis, Chart Patterns and Risk Control.
        </motion.p>

        {/* benefits */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={item}>
          {['Beginner-friendly', 'Real-time practice', 'No fluff content', 'Lifetime mentorship'].map((b, i) => (
            <motion.div
              key={b}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-black/20 text-[#ffffff]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 + i * .1 }}
            >
              🔹 {b}
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-6 mb-16" variants={item}>
          <motion.button
            whileTap={{ scale: .95 }}
            className="py-3 px-10 text-lg font-semibold text-white rounded-full bg-[#146CFF] hover:bg-[#0052CC] transition"
          >
            START
          </motion.button>
          <motion.button
            whileTap={{ scale: .95 }}
            className="py-3 px-10 text-lg font-semibold rounded-full border border-[#ffffff] text-[#ffffff] hover:bg-[#4f4f4f] hover:text-black transition"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* trust indicators */}
        <motion.div className="flex justify-center gap-10 text-[#ffffff]" variants={item}>
          <div className="text-center">
            <div className="text-3xl font-extrabold">5,000+</div>
            <div className="text-sm font-light">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold">98%</div>
            <div className="text-sm font-light">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold">7+</div>
            <div className="text-sm font-light">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
