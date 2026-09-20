"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import CreateModal from "@/app/_components/modal/CreateModal";
import { cn } from "@/lib/utils";

export default function AddButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className={cn(
					"flex h-12 items-center gap-1 rounded-full bg-sky-500 px-6 text-white transition-colors",
					"hover:bg-blue-500",
				)}
				onClick={() => setIsModalOpen(true)}
			>
				<Plus size={20} />
				<span className="font-semibold text-box-trim">追加する</span>
			</button>
			<CreateModal open={isModalOpen} onOpenChange={setIsModalOpen} />
		</>
	);
}
