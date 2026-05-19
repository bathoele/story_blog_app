import express from 'express'
import { Pool } from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM lit');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3001'));