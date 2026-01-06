import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Check karo saare icons yahan hain
import { Mail, Phone, Instagram, CheckCircle2, AlertCircle, Send } from "lucide-react"; 
import { toast } from "sonner";
// @ts-ignore - Agar service file JS hai toh ye line error fix kar degi
import { submitContact } from "../services/contactService.js";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Strict Validation
  const validateEmailStrict = (email: string) => {
    const strictRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return strictRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmailStrict(formData.email)) {
      setEmailError("Min 3 characters required before @");
      toast.error("Invalid Email Format");
      return;
    }

    setLoading(true);
    try {
      // API call using service
      const data: any = await submitContact(formData.name, formData.email, formData.message);
      toast.success(data?.msg || "Inquiry Sent!");
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      // Error handling fix
      const msg = error.response?.data?.msg || "Server Error";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient-primary">Contact Us</h1>
          <p className="text-muted-foreground">We usually respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form with Labels */}
          <div className="glass p-8 rounded-[2rem] border-primary/10">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium px-1">Full Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="glass bg-transparent h-12"
                    required
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium px-1">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="name@example.com" 
                    value={formData.email} 
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      setEmailError("");
                    }}
                    className={`glass bg-transparent h-12 ${emailError ? 'border-red-500' : ''}`}
                    required
                  />
                  {emailError && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {emailError}</p>}
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium px-1">Message</label>
                  <Textarea 
                    placeholder="Your inquiry..." 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="glass bg-transparent min-h-[120px]"
                    required
                  />
                </div>

                <Button disabled={loading} className="w-full h-14 bg-gradient-primary text-white flex gap-2">
                  {loading ? "Sending..." : "Submit Inquiry"} <Send className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="py-12 text-center animate-in zoom-in">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-muted-foreground mt-2 mb-6">Our team will contact you shortly.</p>
                <Button onClick={() => setIsSent(false)} variant="outline">Send Another</Button>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-[2rem] border-primary/10 text-left">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Mail className="text-primary" /> printx78@gmail.com
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-primary" /> +91 80971 25129
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;