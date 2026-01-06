import { useState, useEffect } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import Home from "./Home";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loading animation in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    sessionStorage.setItem("hasSeenLoading", "true");
  };

  return (
    <>
      {showLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {!showLoading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />
          <Navigation />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
