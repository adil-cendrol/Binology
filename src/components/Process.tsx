"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import cup from "@/assets/Group 1.png";

export default function CoffeeHero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 400);
    return () => clearTimeout(t);
  }, []);

  const floatAnim = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f9f5f2] overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-coffee-dark mb-12 tracking-wide drop-shadow-sm">
        SIP IN 3 STEPS
      </h2>

      {/* Cup Wrapper */}
        <div className="relative w-[400px] h-[400px] flex items-center justify-center rounded-full" style={{ backgroundColor: '#484A35' }}>
        <motion.img
          src={cup}
          alt="Coffee Cup"
          className="relative z-10 w-[400px] h-[400px] object-contain drop-shadow-2xl"
          initial={{ y: 40, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Left Button */}
        <motion.button
          className="absolute left-[-170px] top-[40%] -translate-y-1/2 px-6 py-2 rounded-full bg-coffee-dark text-cream font-semibold shadow-lg"
          variants={floatAnim as Variants}
          initial="initial"
          animate="animate"
        >
          Pick Beans
        </motion.button>

        {/* Right Top Button */}
        <motion.button
          className="absolute right-[-201px] top-[9%] px-6 py-2 rounded-full bg-cream text-coffee-dark font-semibold shadow-lg"
          variants={floatAnim as Variants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          Choose Frequency
        </motion.button>

        {/* Right Bottom Button */}
        <motion.button
          className="absolute right-[-170px] bottom-[30%] px-8 py-2 rounded-full bg-coffee-light text-coffee-dark font-semibold shadow-lg"
          variants={floatAnim as Variants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
        >
          Save & Sip
        </motion.button>
      </div>

      {/* Palette */}
      <style>{`
        .bg-coffee-dark { background-color: #4B2C20; }
        .bg-coffee-light { background-color: #C89F7B; }
        .text-coffee-dark { color: #4B2C20; }
        .bg-cream { background-color: #FFF4D6; }
        .text-cream { color: #fffbe9; }
      `}</style>
    </section>
  );
}
