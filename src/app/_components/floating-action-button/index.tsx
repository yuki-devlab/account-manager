import AccountButton from "@/app/_components/floating-action-button/AccountButton";
import CreateButton from "@/app/_components/floating-action-button/CreateButton";
import { cn } from "@/lib/utils";

export default function FloatingActionArea() {
	return (
		<div
			className={cn(
				"fixed bottom-5 left-5 flex flex-col items-center gap-4",
				"md:bottom-6 md:left-6",
			)}
		>
			<AccountButton />
			<CreateButton />
		</div>
	);
}
