import { useEffect, useState } from "react";
import pxLogo from "@/assets/px-logo.png";

// Note: Yahan koi extra SplashScreen ka import nahi hona chahiye

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Agar onComplete prop pass kiya hai toh usey call karein
      if (onComplete) {
        setTimeout(onComplete, 600);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={pxLogo}
        alt="PX Logo"
        className="w-48 h-48 animate-pulse-glow"
      />
    </div>
  );
};

export default LoadingAnimation;