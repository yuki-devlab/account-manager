"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type FocusEvent, useActionState, useEffect } from "react";
import {
	type CreateCredentialState,
	createCredential,
} from "@/app/_actions/create-credential";
import AddButton from "@/app/_components/modal/_components/AddButton";
import CategoryField from "@/app/_components/modal/_components/CategoryField";
import FormField from "@/app/_components/modal/_components/FormField";
import PasswordInput from "@/app/_components/modal/_components/PasswordInput";
import { cn } from "@/lib/utils";

type CreateModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

const initialCreateCredentialState: CreateCredentialState = {
	status: "idle",
	message: "",
};

export default function CreateModal({ open, onOpenChange }: CreateModalProps) {
	const [state, formAction, isPending] = useActionState(
		createCredential,
		initialCreateCredentialState,
	);

	useEffect(() => {
		if (state.status === "success") {
			onOpenChange(false);
		}
	}, [state.status, onOpenChange]);

	const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
		const field = event.target;

		if (!(field instanceof HTMLInputElement)) {
			return;
		}

		window.setTimeout(() => {
			field.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}, 250);
	};

	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay
					inert={!open}
					className={cn(
						"fixed inset-0 bg-slate-500/25 backdrop-blur-xs",
						"data-[state=open]:animate-overlay-enter",
						"data-[state=closed]:animate-overlay-exit",
					)}
					style={{
						pointerEvents: open ? "auto" : "none",
					}}
				>
					<Dialog.Close
						className={cn(
							"absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 transition-colors",
							"hover:bg-slate-500",
							"md:top-6 md:right-6",
						)}
					>
						<X className="text-white" />
					</Dialog.Close>
				</Dialog.Overlay>
				<Dialog.Content
					onFocusCapture={handleFocus}
					onOpenAutoFocus={(event) => {
						event.preventDefault();
					}}
					className={cn(
						"fixed top-1/2 left-1/2 flex max-h-[calc(100dvh-160px)] w-[calc(100%-40px)] origin-bottom -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 overflow-y-auto rounded-4xl bg-white p-8 shadow-2xl",
						"data-[state=open]:animate-dialog-enter",
						"data-[state=closed]:animate-dialog-exit",
						"md:w-auto",
					)}
				>
					<Dialog.Title className="font-semibold text-box-trim text-xl">
						新規作成
					</Dialog.Title>
					<hr className="w-full border-slate-200" />
					<form action={formAction} className="flex w-full flex-col gap-8">
						<div className="flex w-full flex-col gap-8">
							<FormField htmlFor="service-name" label="サービス名">
								<input
									type="text"
									id="service-name"
									name="serviceName"
									placeholder="サービス名を入力してください"
									required
									className={cn(
										"h-14 rounded-xl border border-slate-300 bg-white px-4 text-slate-500 outline-none",
										"placeholder:text-slate-500",
										"focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
										"md:w-md",
									)}
								/>
							</FormField>
							<FormField htmlFor="category" label="カテゴリー">
								<CategoryField />
							</FormField>
							<FormField htmlFor="login-id" label="ログインID">
								<input
									type="text"
									id="login-id"
									name="loginId"
									placeholder="ログインIDを入力してください"
									required
									className={cn(
										"h-14 rounded-xl border border-slate-300 bg-white px-4 text-slate-500 outline-none",
										"placeholder:text-slate-500",
										"focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
									)}
								/>
							</FormField>
							<FormField htmlFor="password" label="パスワード">
								<PasswordInput />
							</FormField>
						</div>
						<AddButton isPending={isPending} />
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
