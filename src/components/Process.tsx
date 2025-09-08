"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import splash from "@/assets/splash.png";
import cup from "@/assets/cup.png";

export default function CoffeeHero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 400);
    return () => clearTimeout(t);
  }, []);

  // coffee drop animation (gravity-like)
  const drip: Variants = {
    initial: { opacity: 0, y: 0, scale: 0.9 },
    animate: {
      opacity: [1, 1, 0],
      y: [0, 40, 90], // falling path
      scale: [1, 1.05, 0.95],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f9f5f2] overflow-hidden">
      {/* Headline */}
      <h2 className="text-3xl md:text-5xl font-bold text-coffee-dark mb-12 tracking-wide drop-shadow-sm">
        SIP IN 3 STEPS
      </h2>

      {/* Cup + Splash wrapper */}
      <div className="perspective-1000 relative w-[340px] h-[340px] flex items-center justify-center">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateX: 5, rotateY: -5 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {/* Splash swirl */}
          <motion.img
            src={splash}
            alt="Coffee Splash"
            className="absolute inset-0 w-full h-full object-contain opacity-80"
            animate={{
              rotate: [0, 12, -12, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cup */}
          <motion.img
            src={cup}
            alt="Coffee Cup"
            className="relative z-10 w-[300px] h-[300px] object-contain drop-shadow-2xl"
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Coffee Drips (falling drops, not bars) */}
          {start && (
            <>
              <motion.div
                className="absolute left-[50%] top-[30%] w-3 h-3 rounded-full bg-coffee-dark shadow-md"
                variants={drip}
                initial="initial"
                animate="animate"
                style={{ marginLeft: "-6px" }}
              />
              <motion.div
                className="absolute left-[47%] top-[32%] w-2.5 h-2.5 rounded-full bg-coffee-light shadow-sm"
                variants={drip}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.7 }}
              />
              <motion.div
                className="absolute left-[53%] top-[31%] w-2 h-2 rounded-full bg-coffee-dark/80 shadow-sm"
                variants={drip}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.3 }}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="relative z-20 mt-16 w-full max-w-xl flex flex-col items-center">
        <div className="flex justify-between w-full px-8 mb-6">
          <button className="px-6 py-2 rounded-full bg-coffee-dark text-cream font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition">
            Pick Beans
          </button>
          <button className="px-6 py-2 rounded-full bg-cream text-coffee-dark font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition">
            Choose Frequency
          </button>
        </div>
        <button className="px-8 py-2 rounded-full bg-coffee-light text-coffee-dark font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.25)] hover:scale-105 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition">
          Save & Sip
        </button>
      </div>

      {/* Palette */}
      <style>{`
        .bg-coffee-dark { background-color: #4B2C20; }
        .bg-coffee-light { background-color: #C89F7B; }
        .text-coffee-dark { color: #4B2C20; }
        .bg-cream { background-color: #FFF4D6; }
        .text-cream { color: #fffbe9; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}
