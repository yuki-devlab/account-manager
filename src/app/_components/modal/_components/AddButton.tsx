import { cn } from "@/lib/utils";

type AddButtonProps = {
	isPending: boolean;
};

export default function AddButton({ isPending }: AddButtonProps) {
	return (
		<button
			type="submit"
			disabled={isPending}
			className={cn(
				"flex h-14 w-full items-center justify-center gap-2 rounded-full bg-sky-500 transition-colors",
				"enabled:hover:bg-blue-500",
				"disabled:cursor-not-allowed disabled:opacity-50",
			)}
		>
			{isPending && (
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
			)}
			<span className="font-semibold text-box-trim text-white">
				{isPending ? "追加中…" : "追加する"}
			</span>
		</button>
	);
}
