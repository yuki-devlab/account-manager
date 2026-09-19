"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { db } from "@/db";
import { credential } from "@/db/schema";
import { auth } from "@/lib/auth";
import { encryptPassword } from "@/lib/encrypt-password";

export type CreateCredentialState = {
	status: "idle" | "success" | "error";
	message: string;
};

export async function createCredential(
	_previousState: CreateCredentialState,
	formData: FormData,
): Promise<CreateCredentialState> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user) {
		return {
			status: "error",
			message: "ログインしてください",
		};
	}

	const serviceName = formData.get("serviceName");
	const selectCategory = formData.get("selectCategory");
	const newCategory = formData.get("newCategory");
	const loginId = formData.get("loginId");
	const password = formData.get("password");

	const category =
		typeof newCategory === "string" && newCategory.trim()
			? newCategory.trim()
			: selectCategory;

	if (
		typeof serviceName !== "string" ||
		!serviceName.trim() ||
		typeof category !== "string" ||
		!category.trim() ||
		typeof loginId !== "string" ||
		!loginId.trim() ||
		typeof password !== "string" ||
		!password
	) {
		return {
			status: "error",
			message: "必須項目を入力してください",
		};
	}

	await db.insert(credential).values({
		id: randomUUID(),
		userId: session.user.id,
		serviceName: serviceName.trim(),
		category: category.trim(),
		loginId: loginId.trim(),
		password: encryptPassword(password),
	});

	revalidatePath("/");

	return {
		status: "success",
		message: "",
	};
}
