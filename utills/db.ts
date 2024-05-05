import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const pool = neon(process.env.POSTGRES_URL!);

export const db = drizzle(pool);
