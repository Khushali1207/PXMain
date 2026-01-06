import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, CheckCircle2, AlertCircle } from "lucide-react"; 
import { toast } from "sonner";
import { submitContact } from "../services/contactService.js"; // Import service

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔥 Strict Email Check: @ ke pehle min 3 chars
  const validateEmailStrict = (email) => {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmailStrict(formData.email)) {
      setEmailError("Bhai, sahi email dalo! (min 3 chars before @)");
      toast.error("Invalid Email Format");
      return;
    }

    setLoading(true);
    try {
      // Service call
      const data = await submitContact(formData.name, formData.email, formData.message);
      
      toast.success(data.msg || "Message stored! ✅");
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Server connection failed!";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary">Get In Touch</h1>
          <div className="h-1.5 w-32 bg-gradient-primary mx-auto rounded-full mb-8 shadow-lg" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left: Form */}
          <div className="glass rounded-[2.5rem] p-8 lg:p-10 glow-primary border-primary/20">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-gradient-primary">Send a Message</h2>
                
                <div className="space-y-4">
                  <Input 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    className="h-12 glass bg-transparent border-primary/30"
                    required 
                  />

                  <div className="space-y-1">
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email} 
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if(emailError) setEmailError("");
                      }} 
                      className={`h-12 glass bg-transparent ${emailError ? 'border-red-500' : 'border-primary/30'}`}
                      required 
                    />
                    {emailError && <p className="text-red-500 text-[11px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {emailError}</p>}
                  </div>

                  <Textarea 
                    placeholder="Message" 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="glass bg-transparent border-primary/30 min-h-[150px]"
                    required 
                  />
                </div>

                <Button disabled={loading} type="submit" className="w-full h-14 bg-gradient-primary text-white font-bold rounded-2xl hover:scale-105 transition-all">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-20 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gradient-primary">Message Sent!</h2>
                <p className="text-muted-foreground mt-4 mb-8">Thank you for contacting PX. We'll contact you shortly!.</p>
                <Button onClick={() => setIsSent(false)} variant="outline" className="glass border-primary/30 rounded-xl">Send Another</Button>
              </div>
            )}
          </div>

          {/* Right: Info Boxes */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="glass rounded-[2rem] p-8 glow-secondary flex-1 border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-gradient-primary text-left">Connect</h3>
              <div className="space-y-6 text-left">
                <a href="mailto:printx78@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all">
                  <Mail className="w-6 h-6 text-primary" /> printx78@gmail.com
                </a>
                <a href="tel:+918097125129" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all">
                  <Phone className="w-6 h-6 text-primary" /> +91 80971 25129
                </a>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8 glow-accent border-primary/10 text-left">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Follow</h3>
              <a href="https://www.instagram.com/printwithpx" target="_blank" className="inline-block p-4 glass rounded-2xl hover:scale-110 transition-all border-primary/20">
                <Instagram className="w-7 h-7 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;