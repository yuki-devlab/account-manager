import "server-only";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

const algorithm = "aes-256-gcm";

function getEncryptionKey() {
	const value = process.env.PASSWORD_ENCRYPTION_KEY;

	if (!value) {
		throw new Error("PASSWORD_ENCRYPTION_KEY is required.");
	}

	const key = Buffer.from(value, "base64");

	if (key.length !== 32) {
		throw new Error("PASSWORD_ENCRYPTION_KEY must be 32 bytes.");
	}

	return key;
}

export function encryptPassword(password: string) {
	const iv = randomBytes(12);
	const cipher = createCipheriv(algorithm, getEncryptionKey(), iv);

	const ciphertext = Buffer.concat([
		cipher.update(password, "utf8"),
		cipher.final(),
	]);

	const tag = cipher.getAuthTag();

	return [
		iv.toString("base64"),
		tag.toString("base64"),
		ciphertext.toString("base64"),
	].join(".");
}

export function decryptPassword(password: string) {
	const [iv, tag, ciphertext] = password.split(".");

	if (!iv || !tag || !ciphertext) {
		throw new Error("Invalid encrypted password.");
	}

	const decipher = createDecipheriv(
		algorithm,
		getEncryptionKey(),
		Buffer.from(iv, "base64"),
	);

	decipher.setAuthTag(Buffer.from(tag, "base64"));

	return Buffer.concat([
		decipher.update(Buffer.from(ciphertext, "base64")),
		decipher.final(),
	]).toString("utf8");
}
