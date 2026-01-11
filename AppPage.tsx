import { useState } from "react";
import { Upload, Smartphone, Package, Loader2, ArrowRightLeft, FileText, Presentation, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";

const AppPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      icon: <Upload className="w-16 h-16" />,
      title: "Upload",
      description: "Any format, from any device.",
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Tap",
      description: "Confirm settings and pay instantly.",
    },
    {
      icon: <Package className="w-16 h-16" />,
      title: "Collect",
      description: "Pick up prints in under 30 seconds.",
    },
  ];

  const handleNotifyMe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      return toast.error("Bhai, sahi email toh dalo!");
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/notify", { email });
      if (response.status === 200) {
        toast.success("Mubarak ho! MongoDB mein save ho gaya. 🚀");
        setEmail(""); 
      }
    } catch (error) {
      console.error("Axios Error:", error);
      const errorMsg = error.response?.data?.error || "Server connect nahi ho raha!";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    /* DHAYAN DEIN: Yahan bg-black hata kar bg-transparent kar diya hai taaki App.jsx wala BG dikhe */
    <div className="min-h-screen py-32 bg-transparent text-white relative overflow-hidden">
      
      {/* Background Blurs (Inhe rehne diya hai for extra glow) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-primary tracking-tighter">
            The PX App
          </h1>
          <div className="h-1.5 w-32 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-10 italic">
            "Upload. Tap. Collect."
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
            <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Launching Soon</span>
          </div>
        </div>

        {/* --- STEPS SECTION --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-8">
                <div className="glass rounded-[2.5rem] p-10 glow-primary transition-all duration-500 group-hover:scale-105 border-white/5">
                  <div className="text-primary">{step.icon}</div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-black text-2xl shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>

        

        {/* --- WAITLIST SECTION --- */}
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 glow-primary text-center border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl font-black mb-8 text-gradient-primary tracking-tight">
            Get Notified at Launch
          </h2>
          
          <div className="aspect-video bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 relative overflow-hidden group">
            <Smartphone className="w-32 h-32 text-primary animate-bounce z-10" />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          </div>

          <form onSubmit={handleNotifyMe} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto relative z-10">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-16 glass bg-transparent border-primary/20 rounded-2xl px-8 text-lg focus:ring-2 focus:ring-primary/50"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-16 px-12 bg-primary text-black font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-lg glow-primary"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Notify Me 🚀"}
            </Button>
          </form>

          <p className="text-[10px] text-gray-600 mt-10 uppercase tracking-[0.4em] font-bold">
            Cloud Infrastructure Powered by MongoDB Atlas
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppPage;