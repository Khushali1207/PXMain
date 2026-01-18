import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passport from "./passport.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

// 🔥 IMPORTANT FIX FOR RENDER + GOOGLE OAUTH
app.set("trust proxy", 1);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// MongoDB + Server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
