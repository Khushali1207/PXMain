import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passport from "./passport.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

// 🔥 TRUST PROXY (RENDER FIX)
app.set("trust proxy", 1);

// 🔥 FORCE HTTPS (THIS FIXES redirect_uri_mismatch)
app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

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

// Start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
