import { neon   } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in environment variables.");
}

const dbUrl : string = process.env.DATABASE_URL 

const sql = neon(dbUrl)


export default sql;