import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/px-logo.png";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg z-50">
      <motion.img
        src={logo}
        alt="PX Logo"
        className="w-40 glow-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
    </div>
  );
}
