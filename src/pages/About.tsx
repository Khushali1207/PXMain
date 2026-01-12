import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Zap, Clock, Smartphone, FileText, CheckCircle2, 
  Wifi, Battery, ChevronRight, Layout, MousePointer2, 
  Box, Sparkles, Printer, Layers, RotateCcw, ShieldCheck,
  Presentation, FileCode, ArrowRightLeft, FileType, Cpu
} from "lucide-react";

const About = () => {
  const [step, setStep] = useState(0);
  const demoRef = useRef(null);
  const isInView = useInView(demoRef, { amount: 0.6 });

  const runAnimation = useCallback(() => {
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 1800), 
      setTimeout(() => setStep(2), 2600), 
      setTimeout(() => setStep(3), 3800), 
      setTimeout(() => setStep(4), 5000), 
      setTimeout(() => setStep(5), 6500), 
      setTimeout(() => setStep(6), 9000), 
    ];
    return timers;
  }, []);

  useEffect(() => {
    let timers = [];
    if (isInView) {
      timers = runAnimation();
    } else {
      setStep(0);
    }
    return () => timers.forEach(clearTimeout);
  }, [isInView, runAnimation]);

  const features = [
    { 
      icon: <Zap className="w-12 h-12" />, 
      title: "Instant Printing", 
      description: "No more waiting in long queues. Collect your print in under 30 seconds with PX's high-speed technology.",
      points: ["Super Fast", "Zero Waiting", "High Quality"]
    },
    { 
      icon: <Clock className="w-12 h-12" />, 
      title: "24/7 Access", 
      description: "Available whenever you need it. Whether it's a late-night assignment or an early morning exam.",
      points: ["Always Open", "Campus Access", "Self Service"]
    },
    { 
      icon: <ShieldCheck className="w-12 h-12" />, 
      title: "Smart & Secure", 
      description: "Your files are safe and private. Direct encrypted transfer from your phone to the PX Machine.",
      points: ["Privacy First", "Secure Pay", "No Data Storage"]
    },
  ];

  const cursorVariants = {
    0: { x: 220, y: 300, opacity: 0 },
    1: { x: 80, y: 160, opacity: 1 }, 
    2: { x: 80, y: 160, scale: 0.8 }, 
    3: { x: 140, y: 490, opacity: 1, scale: 1 }, 
    4: { x: 140, y: 490, scale: 0.8 }, 
    5: { x: 140, y: 460, opacity: 1, scale: 1 }, 
    6: { opacity: 0 }
  };

  const presetFiles = [
    { name: "Front_Page_Official", subtitle: "College Template" },
    { name: "Lab_Manual_Physics", subtitle: "Official Format" },
    { name: "Assignment_Cover", subtitle: "Generic Template" },
  ];

  return (
    <div className="min-h-screen py-32 bg-transparent text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- BRAND HEADER --- */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-3 mb-6 bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
            <Box className="text-primary w-5 h-5" />
            <span className="text-xl font-black tracking-tighter uppercase italic text-white">PX Machine</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">ABOUT <span className="text-primary font-outline-2">PX</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-medium italic">India's smartest printing network. One Tap. One Second.</p>
        </div>

        {/* --- 3 FEATURE BOXES --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-[3rem] p-10 border border-white/5 group transition-all hover:border-primary/30">
              <div className="text-primary mb-8 transition-transform group-hover:scale-110 duration-500">{feature.icon}</div>
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase italic">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{feature.description}</p>
              <ul className="space-y-3">
                {feature.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- VIDEO DEMO SECTION --- */}
        <div ref={demoRef} className="flex flex-col lg:flex-row items-center justify-between gap-16 glass rounded-[4rem] p-8 lg:p-20 border border-white/10 mb-32 relative">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/20 text-primary text-[10px] font-black mb-4 tracking-[0.3em] uppercase italic">
              <Sparkles size={14} /> Built-in Presets
            </div>
            <h2 className="text-5xl font-black mb-6 tracking-tight leading-[1.1]">Instant <span className="text-primary italic text-6xl">Presets.</span></h2>
            <p className="text-gray-200 text-xl font-bold mb-4 italic italic">No searching. No uploading.</p>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              **PX Machines** come with all essential documents **pre-loaded** in the app. Find your college preset, tap print, and collect.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0"><Layout size={24} /></div>
                <div>
                  <h4 className="text-lg font-black tracking-tight text-white mb-1 uppercase italic">Pre-loaded Files</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-tighter">Official templates ready to go.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black shrink-0 shadow-lg shadow-primary/20">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-tight text-white mb-1 uppercase italic">One-Tap Success</h4>
                  <p className="text-sm text-gray-500 font-bold opacity-80 uppercase tracking-tighter">Print under 30 seconds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Phone UI */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="w-[310px] h-[620px] bg-gradient-to-b from-[#ffffff] via-[#94a3b8] to-[#1e293b] rounded-[3.8rem] p-[3px] shadow-[0_50px_100px_rgba(0,0,0,0.7)] relative z-10">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[3.5rem] overflow-hidden relative flex flex-col border-[6px] border-[#111]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-3xl z-[110]" />
                <div className="flex-1 px-5 pt-12 relative flex flex-col">
                  <div className="flex justify-between items-center px-2 mb-4 mt-2">
                     <h3 className="text-[12px] font-black text-primary italic uppercase tracking-tighter">PX APP</h3>
                     <div className="flex gap-1.5 opacity-30"><Wifi size={10}/><Battery size={10}/></div>
                  </div>
                  <motion.div variants={cursorVariants} animate={step.toString()} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute z-[120] pointer-events-none text-primary drop-shadow-[0_0_15px_rgba(var(--primary),1)]">
                    <MousePointer2 size={32} fill="currentColor" />
                  </motion.div>
                  <AnimatePresence mode="wait">
                    {(step <= 3) && (
                      <motion.div key="presets" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                        <h4 className="text-[9px] font-black tracking-[0.2em] uppercase mb-4 opacity-40 px-1">Choose Preset</h4>
                        <div className="space-y-3">
                          {presetFiles.map((file, i) => (
                            <div key={i} className={`p-4 rounded-2xl border-2 transition-all duration-500 ${step >= 2 && i === 0 ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5'}`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FileText size={16} className={step >= 2 && i === 0 ? 'text-primary' : 'text-white/20'}/>
                                  <div>
                                    <p className="text-[10px] font-black uppercase tracking-tight">{file.name}</p>
                                    <p className="text-[7px] font-bold opacity-30 uppercase tracking-tighter">{file.subtitle}</p>
                                  </div>
                                </div>
                                {step >= 2 && i === 0 && <CheckCircle2 size={14} className="text-primary" />}
                              </div>
                            </div>
                          ))}
                        </div>
                        {step >= 2 && (
                          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute bottom-6 left-4 right-4 bg-primary p-4 rounded-2xl flex items-center justify-between shadow-2xl">
                             <div className="flex items-center gap-2 text-black">
                               <div className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center font-black text-[10px]">1</div>
                               <span className="text-[10px] font-black uppercase tracking-tight">File Selected</span>
                             </div>
                             <ChevronRight size={16} className="text-black" />
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                    {(step === 4 || step === 5) && (
                      <motion.div key="addons" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col pt-2 pb-6">
                        <div className="flex-1 glass border border-white/10 rounded-[2.5rem] p-6 flex flex-col">
                           <div className="mb-6 flex items-center gap-2 text-primary">
                              <Layers size={14} /><span className="text-[9px] font-black uppercase tracking-widest text-white">Smart Add-ons</span>
                           </div>
                           <div className="flex flex-col gap-3 mb-8">
                              <div className="py-3 rounded-xl bg-primary/20 border border-primary/40 text-[9px] font-black text-center italic underline decoration-primary">Auto-Staple</div>
                              <div className="py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-center opacity-30">High-Res Mode</div>
                           </div>
                           <motion.div animate={step === 5 ? { scale: 0.95 } : { scale: 1 }} className={`mt-auto w-full py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] text-center transition-all duration-500 shadow-xl ${step === 5 ? 'bg-primary text-black shadow-primary/30' : 'bg-white/10 border border-white/20'}`}>
                              {step === 5 ? "Printing..." : "Tap to Print"}
                           </motion.div>
                        </div>
                      </motion.div>
                    )}
                    {step === 6 && (
                      <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center pb-12 px-4">
                        <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center mb-6 shadow-2xl shadow-primary/40"><Printer size={40} className="text-black" /></div>
                        <h3 className="text-2xl font-black mb-2 italic uppercase text-primary leading-none">Document Printed!</h3>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-relaxed px-4 text-center">Collect from the <span className="text-white underline decoration-primary">PX Machine outlet.</span></p>
                        <button onClick={runAnimation} className="mt-10 group flex items-center gap-2 bg-white/5 border border-white/10 py-3 px-6 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
                           <RotateCcw size={14} className="group-hover:rotate-[-180deg] transition-transform duration-500" />
                           <span className="text-[9px] font-black uppercase tracking-widest">Watch Again</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="h-1 w-20 bg-white/10 rounded-full mx-auto mb-3" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-primary/10 blur-[120px] -z-10 rounded-full" />
          </div>
        </div>

        {/* --- THE ALL-TO-ALL CONVERSION HUB (INJECTED HERE) --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 glass rounded-[4rem] p-10 lg:p-20 border border-white/5 bg-white/[0.01] mb-40 relative overflow-hidden group">
          <div className="lg:w-2/5 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-6 tracking-widest uppercase italic">
              <Cpu size={14} /> Matrix Core
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-[0.9] uppercase italic">
              LIMITLESS <br /> <span className="text-primary italic">CONVERSION.</span>
            </h2>
            <p className="text-gray-400 text-xl font-bold mb-10 italic leading-snug">
              Break the format barrier. Seamlessly convert documents between Word, PPT, DOCX or PDF with absolute ease.
            </p>
            <div className="space-y-5">
               {[
                 "Convert any file to any format instantly", 
                 "Cross-platform document compatibility", 
                 "High-fidelity output for every transformation"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-4 group/item">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary transition-all">
                     <CheckCircle2 size={14} className="text-primary group-hover/item:text-black" />
                   </div>
                   <span className="text-sm font-black uppercase tracking-tight italic text-white/80">{text}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center gap-6 md:gap-8 relative z-10">
            <div className="flex flex-col gap-6">
              <div className="w-24 h-24 glass rounded-[2.5rem] flex flex-col items-center justify-center border-white/10 bg-white/[0.04] shadow-2xl transition-all hover:border-primary/40 group/icon">
                <Presentation className="text-orange-500 mb-1 group-hover/icon:scale-110 transition-transform" size={32} />
                <span className="text-[9px] font-black opacity-40 uppercase tracking-tighter">PPTX</span>
              </div>
              <div className="w-24 h-24 glass rounded-[2.5rem] flex flex-col items-center justify-center border-white/10 bg-white/[0.04] shadow-2xl transition-all hover:border-primary/40 group/icon">
                <FileType className="text-blue-500 mb-1 group-hover/icon:scale-110 transition-transform" size={32} />
                <span className="text-[9px] font-black opacity-40 uppercase tracking-tighter">DOCX</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 glass rounded-full border-2 border-primary/30 flex items-center justify-center bg-black/60 relative z-10 shadow-[0_0_80px_rgba(var(--primary),0.1)]">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-dashed border-primary/10 rounded-full" />
                <ArrowRightLeft className="text-primary" size={54} strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-24 h-24 glass rounded-[2.5rem] flex flex-col items-center justify-center border-white/10 bg-white/[0.04] shadow-2xl transition-all hover:border-primary/40 group/icon">
                <FileCode className="text-red-500 mb-1 group-hover/icon:scale-110 transition-transform" size={32} />
                <span className="text-[9px] font-black opacity-40 uppercase tracking-tighter">PDF</span>
              </div>
              <div className="w-24 h-24 glass rounded-[2.5rem] flex flex-col items-center justify-center border-white/10 bg-white/[0.04] shadow-2xl transition-all hover:border-primary/40 group/icon">
                <FileText className="text-blue-400 mb-1 group-hover/icon:scale-110 transition-transform" size={32} />
                <span className="text-[9px] font-black opacity-40 uppercase tracking-tighter">WORD</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] blur-[150px] -z-10" />
        </div>

        {/* --- MISSION / VISION CARDS --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Our Mission</h3>
            <p className="text-xl text-gray-400 font-medium italic">"To make printing as seamless as tapping your phone, eliminating wait times forever."</p>
          </div>
          <div className="glass p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Our Vision</h3>
            <p className="text-xl text-gray-400 font-medium italic">"A world where document physicalisation is instant, sustainable, and connected."</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;