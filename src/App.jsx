import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// --- PAGES ---
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import Founders from "./pages/Founders";
import AppPage from "./pages/AppPage";
import Contact from "./pages/Contact";

// --- COMPONENTS ---
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
    // Auth listener (Updates UI automatically when token changes)
    const syncAuth = () => setAuth(!!localStorage.getItem("px_token"));
    window.addEventListener("storage", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        // FIX: Added onFinish prop here to stop the "TypeError"
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <div className="bg-container" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
            <ParticleBackground />
            <FloatingBackground />
          </div>

          <CustomCursor />
          <ScrollProgress />
          
          {auth && <Navigation />}

          <main style={{ position: "relative", zIndex: 1 }}>
            <Routes>
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

              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </main>

          {auth && <Footer />}
        </>
      )}
    </BrowserRouter>
  );
}