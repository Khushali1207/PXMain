import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock, Mail, User, ArrowRight, Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // ✅ Handle Google redirect token
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("px_token", token);
      toast.success("Google login successful 🚀");
      navigate("/home");
    }
  }, [navigate]);

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters";
    if (!isLogin && formData.name.length < 3) newErrors.name = "Name too short";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    toast.success("Dummy login (connect backend API here)");
  };

  // ✅ ONLY this for Google login
  const handleGoogleLogin = () => {
    window.location.href = "https://pxmain.onrender.com/api/auth/google";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="glass p-8 rounded-[2.5rem] w-full max-w-md">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {isLogin ? "Login to continue" : "Join PX"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
          )}

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          <Button type="submit" className="w-full">
            {isLogin ? "Login" : "Sign Up"} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>

        {/* ✅ REAL Google Button */}
        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
            }}
            className="text-primary font-bold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
