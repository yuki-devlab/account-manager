"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import CreateModal from "@/app/_components/modal/CreateModal";
import { cn } from "@/lib/utils";

export default function CreateButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className={cn(
					"flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 transition-colors",
					"hover:bg-blue-500",
				)}
				onClick={() => setIsModalOpen(true)}
			>
				<Plus className="text-white" />
			</button>
			<CreateModal open={isModalOpen} onOpenChange={setIsModalOpen} />
		</>
	);
}
