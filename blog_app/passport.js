import passport from "passport";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import dotenv from "dotenv";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'auth/google/callaback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Reject non admins
    if (profile.id !== process.env.ADMIN_GOOGLE_ID) {
      return done(null, false, { message: 'Unauthorized account' });
    }
    // console log google id
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;