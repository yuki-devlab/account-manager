import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type CategorySelectProps = {
	isAdding: boolean;
};

export default function CategorySelect({ isAdding }: CategorySelectProps) {
	return (
		<Select.Root
			name="selectCategory"
			defaultValue="unselected"
			required={!isAdding}
		>
			<Select.Trigger
				id="category"
				className={cn(
					"group flex h-14 flex-1 items-center justify-between rounded-xl border border-slate-300 bg-white px-4 text-slate-500 outline-none",
					"data-[state=open]:border-sky-500 data-[state=open]:ring-2 data-[state=open]:ring-sky-200",
					"focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-200",
				)}
			>
				<Select.Value placeholder="選択してください" />
				<Select.Icon asChild>
					<ChevronDown
						className={cn(
							"text-slate-400 transition-transform",
							"group-data-[state=open]:-rotate-180",
						)}
					/>
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content
					position="popper"
					side="bottom"
					align="start"
					sideOffset={12}
					className="w-(--radix-select-trigger-width) rounded-2xl border border-slate-300 bg-white p-2 shadow-xl"
				>
					<Select.Viewport>
						<Select.Item
							value="unselected"
							className={cn(
								"group flex h-14 cursor-pointer items-center justify-between rounded-xl bg-white px-4 text-slate-500 transition-colors",
								"data-[state=checked]:text-slate-800",
								"hover:bg-slate-100",
							)}
						>
							<Select.ItemText>選択してください</Select.ItemText>
							<Select.ItemIndicator>
								<Check size={20} className="text-sky-500" />
							</Select.ItemIndicator>
						</Select.Item>
						<Select.Item
							value="sns"
							className={cn(
								"group flex h-14 cursor-pointer items-center justify-between rounded-xl bg-white px-4 text-slate-500 transition-colors",
								"data-[state=checked]:text-slate-800",
								"hover:bg-slate-100",
							)}
						>
							<Select.ItemText>SNS</Select.ItemText>
							<Select.ItemIndicator>
								<Check size={20} className="text-sky-500" />
							</Select.ItemIndicator>
						</Select.Item>
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
}
