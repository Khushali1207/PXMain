import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock, Mail, User, ShieldCheck, ArrowRight, Eye, EyeOff } from "lucide-react";
import { auth, googleProvider } from "../lib/firebase"; 
import { signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

const AuthPage = () => {
  const navigate = useNavigate();
  
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     localStorage.setItem("px_token", result.user.accessToken);
  //     toast.success(`Welcome ${result.user.displayName}! 🚀`);
  //     window.location.href = "/home";
  //   } catch (error) {
  //     toast.error("Google Login Failed!");
  //   }
  // };

  const handleGoogleLogin = async () => {
  try {
    console.log("Google login clicked");
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    localStorage.setItem("px_token", result.user.accessToken);
    navigate("/home");
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};


  const handleForgotPassword = async () => {
    if (!validateEmail(formData.email)) {
      toast.error("Pehle valid email dalo!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Reset link bhej diya hai!");
    } catch (error) {
      toast.error("Error sending reset link.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(formData.email)) newErrors.email = "Sahi email dalo!";
    if (formData.password.length < 6) newErrors.password = "Min. 6 characters!";
    
    if (!isLogin) {
      if (formData.name.length < 3) newErrors.name = "Naam thoda bada!";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Match nahi hua!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // --- DIRECT ENTRY (NO OTP) ---
      localStorage.setItem("px_token", "verified_user");
      toast.success(isLogin ? "Welcome Back! 🚀" : "Account Created! 🎉");
      window.location.href = "/home";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="glass p-8 rounded-[2.5rem] w-full max-w-md glow-primary border-primary/20 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {isLogin ? "Login to continue with PX" : "Join the PX printing revolution"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-primary/60" />
              <Input 
                placeholder="Full Name" 
                className="pl-11 h-12 glass bg-transparent border-primary/20" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name}</p>}
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-primary/60" />
            <Input 
              type="email" 
              placeholder="Email Address" 
              className="pl-11 h-12 glass bg-transparent border-primary/20"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-primary/60" />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="pl-11 h-12 glass bg-transparent border-primary/20"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-primary/60">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.password}</p>}
          </div>

          {!isLogin && (
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-3.5 w-5 h-5 text-primary/60" />
              <Input 
                type="password" 
                placeholder="Confirm Password" 
                className="pl-11 h-12 glass bg-transparent border-primary/20"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
              {errors.confirmPassword && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.confirmPassword}</p>}
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" onClick={handleForgotPassword} className="text-xs text-primary hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          <Button type="submit" className="w-full h-12 bg-gradient-primary text-white font-bold rounded-xl mt-2 hover:scale-[1.02] transition-all shadow-lg">
            {isLogin ? "Login" : "Sign Up"} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-primary/10"></span></div>
            <span className="relative bg-background px-4 text-[10px] text-muted-foreground uppercase tracking-widest">Or continue with</span>
          </div>

          <Button variant="outline" type="button" onClick={handleGoogleLogin} className="w-full h-12 glass border-primary/20 flex gap-3 rounded-xl hover:bg-primary/5 transition-all">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="G" />
            <span className="text-sm font-medium">Google Account</span>
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => {setIsLogin(!isLogin); setErrors({});}} className="text-primary font-bold hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;