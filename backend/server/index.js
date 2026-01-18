import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passport from "./passport.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

// Trust Render proxy
app.set("trust proxy", true);

// Force HTTPS (critical for Google OAuth)
app.use((req, res, next) => {
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    return next();
  }
  res.redirect(`https://${req.headers.host}${req.url}`);
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));

