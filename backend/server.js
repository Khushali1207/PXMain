import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import Contact from "./models/Contact.js"; // Ensure ye file aapne models folder me banayi hai

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Auth Routes (Register/Login)
app.use("/api/auth", authRoutes);

// 2. Contact Form Route
app.use("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation: Check if all fields are present
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide name, email, and message." 
      });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ 
      success: true, 
      message: "Message saved successfully! We will get back to you soon." 
    });
  } catch (error) {
    console.error("❌ Contact Route Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error. Please try again later." 
    });
  }
});

// --- DATABASE CONNECTION ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  });

// --- SERVER START ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});