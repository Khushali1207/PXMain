import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://pxmain.onrender.com/api/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email"));

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            fullName: profile.displayName,
            email,
            password: "google-auth",
          });
        }

        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

export default passport;
