import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
	throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required.");
}

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dialect: "turso",
	dbCredentials: {
		url,
		authToken,
	},
});
