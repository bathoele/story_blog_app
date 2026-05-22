import express from 'express'
import session from 'express-session'
import cors from 'cors'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import passport from 'passport'

dotenv.config()

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// add auth middleware

app.get('/api/posts', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM lit');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(3001, () => console.log('Server running on port 3001'));