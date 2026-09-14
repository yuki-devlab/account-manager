"use client";

import { useEffect, useState } from "react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function LoginButton() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handlePageShow = () => {
			setIsLoading(false);
		};

		window.addEventListener("pageshow", handlePageShow);

		return () => {
			window.removeEventListener("pageshow", handlePageShow);
		};
	}, []);

	const handleLogin = async () => {
		try {
			setIsLoading(true);

			await authClient.signIn.social({
				provider: "google",
				callbackURL: "/",
			});
		} catch (_error) {
			setIsLoading(false);
		}
	};

	return (
		<button
			type="button"
			disabled={isLoading}
			className={cn(
				"flex h-14 items-center gap-2 rounded-full bg-slate-800 px-7 transition-all",
				"enabled:hover:bg-slate-700",
				"disabled:cursor-not-allowed disabled:opacity-50",
			)}
			onClick={handleLogin}
		>
			{isLoading ? (
				<div className="h-5 w-5 animate-spin rounded-full border-[2.5px] border-white/50 border-t-white" />
			) : (
				<GoogleIcon height={20} />
			)}
			<span className="font-semibold text-box-trim text-white">
				Googleでログイン
			</span>
		</button>
	);
}
