"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import CategorySelect from "@/app/_components/modal/_components/CategorySelect";
import { cn } from "@/lib/utils";

export default function CategoryField() {
	const [isAdding, setIsAdding] = useState(false);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<CategorySelect isAdding={isAdding} />
				<button
					type="button"
					className={cn(
						"text-sky-500 transition-colors",
						"hover:text-blue-500",
					)}
					onClick={() => setIsAdding((current) => !current)}
				>
					{isAdding ? <Minus /> : <Plus />}
				</button>
			</div>
			{isAdding && (
				<input
					type="text"
					name="newCategory"
					placeholder="カテゴリーを入力してください"
					required
					className={cn(
						"h-14 rounded-xl border border-slate-300 bg-white px-4 outline-none",
						"placeholder:text-slate-400",
						"focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
					)}
				/>
			)}
		</div>
	);
}
