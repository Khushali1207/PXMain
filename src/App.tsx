import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Story from "./pages/OurStory";
import Founders from "./pages/Founders";
import AppPage from "./pages/AppPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConverterPage from "./pages/ConverterPage";

// Components
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Simple Layout - No extra touch jhol
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CustomCursor />
    <ScrollProgress />
    <ParticleBackground />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Har route par Layout apply kar diya hai */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/story" element={<Layout><Story /></Layout>} />
          <Route path="/founders" element={<Layout><Founders /></Layout>} />
          <Route path="/app" element={<Layout><AppPage /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/converterpage" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;