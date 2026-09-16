"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PasswordInput() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="relative">
			<input
				type={isVisible ? "text" : "password"}
				id="password"
				name="password"
				placeholder="パスワードを入力してください"
				required
				className={cn(
					"h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-500 outline-none",
					"placeholder:text-slate-500",
					"focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
				)}
			/>
			<button
				type="button"
				className={cn(
					"absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition-colors",
					"hover:text-slate-500",
				)}
				onClick={() => setIsVisible((current) => !current)}
			>
				{isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
			</button>
		</div>
	);
}
