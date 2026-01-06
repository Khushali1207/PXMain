import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// --- PAGES (src/pages) ---
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import Founders from "./pages/Founders";
import AppPage from "./pages/AppPage";
import Contact from "./pages/Contact";
import ConverterPage from "./pages/ConverterPage"; // <--- Naya Page Import

// --- COMPONENTS (src/components) ---
import SplashScreen from "./components/SplashScreen";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import FloatingBackground from "./components/FloatingBackground";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [auth, setAuth] = useState(!!localStorage.getItem("px_token"));

  useEffect(() => {
    // 1. Splash screen timer
    const timer = setTimeout(() => setShowSplash(false), 2500);
    
    // 2. Auth listener (Updates UI automatically)
    const syncAuth = () => setAuth(!!localStorage.getItem("px_token"));
    window.addEventListener("storage", syncAuth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          {/* GLOBAL BACKGROUND (Peeche fixed hai) */}
          <div className="bg-container" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
            <ParticleBackground />
            <FloatingBackground />
          </div>

          {/* GLOBAL UI ELEMENTS */}
          <CustomCursor />
          <ScrollProgress />
          
          {/* NAVBAR (Only if logged in) */}
          {auth && <Navigation />}

          {/* MAIN PAGE CONTENT */}
          <main style={{ position: "relative", zIndex: 1 }}>
            <Routes>
              {/* Login Check Logic */}
              <Route path="/" element={auth ? <Navigate to="/home" /> : <Navigate to="/login" />} />
              
              <Route
                path="/login"
                element={auth ? <Navigate to="/home" /> : <Login />}
              />

              {/* Protected Routes */}
              <Route path="/home" element={auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/about" element={auth ? <About /> : <Navigate to="/login" />} />
              <Route path="/story" element={auth ? <OurStory /> : <Navigate to="/login" />} />
              <Route path="/founders" element={auth ? <Founders /> : <Navigate to="/login" />} />
              <Route path="/app" element={auth ? <AppPage /> : <Navigate to="/login" />} />
              <Route path="/contact" element={auth ? <Contact /> : <Navigate to="/login" />} />
              
              {/* NEW: CONVERTER PAGE ROUTE */}
              <Route path="/convert" element={auth ? <ConverterPage /> : <Navigate to="/login" />} />

              {/* 404 Fallback */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </main>

          {/* FOOTER (Only if logged in) */}
          {auth && <Footer />}
        </>
      )}
    </BrowserRouter>
  );
}
