import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { login, signup } from "../controllers/authController.js";

const router = express.Router();

// Email/password
router.post("/signup", signup);
router.post("/login", login);

// Google OAuth start (FIXED)
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false   // 👈 IMPORTANT
  })
);

// Google OAuth callback (already fixed)
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.redirect(`https://px-main.vercel.app/login?token=${token}`);
  }
);

export default router;

