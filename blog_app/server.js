import express from 'express'
import { Pool } from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const pool = new Pool({})