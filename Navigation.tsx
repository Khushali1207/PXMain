import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pxLogo from "@/assets/px-logo.png";
import { Menu, X, LogOut, FileType } from "lucide-react"; // FileType icon add kiya converter ke liye

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("px_token");
    window.location.reload();
  };

  // --- NAV LINKS (Converter Add Kardiya) ---
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/story", label: "Our Story" },
    { to: "/founders", label: "Founders" },
    { to: "/app", label: "App" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "glass glow-primary py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center smooth-transition hover:scale-105">
          <img src={pxLogo} alt="PX Logo" className="w-12 h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`font-body font-medium smooth-transition hover:text-primary relative group ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Underline effect for active link */}
                  {location.pathname === link.to && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-tighter">Logout</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-3xl p-6 animate-in slide-in-from-top-5 duration-300 border border-white/10 shadow-2xl">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between font-body font-semibold text-lg py-2 smooth-transition ${
                    location.pathname === link.to
                      ? "text-primary translate-x-2"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && <span className="w-2 h-2 bg-primary rounded-full" />}
                </Link>
              </li>
            ))}
            
            <li className="pt-4 border-t border-white/10">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-red-500 text-white font-black text-lg shadow-lg active:scale-95 transition-transform"
              >
                <LogOut size={22} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;