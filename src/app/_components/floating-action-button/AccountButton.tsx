"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function AccountButton() {
	const { data: session, isPending } = authClient.useSession();
	const imageUrl = session?.user.image;

	return (
		<button
			type="button"
			className={cn(
				"group rounded-full border border-slate-300 p-0.5 transition-colors",
				"hover:border-slate-400",
			)}
		>
			{isPending ? (
				<span className="block h-10 w-10 animate-pulse rounded-full bg-slate-300" />
			) : (
				imageUrl && (
					<Image
						src={imageUrl}
						width={40}
						height={40}
						alt={`${session.user.name}のプロフィール画像`}
						loading="eager"
						className={cn(
							"rounded-full transition-opacity",
							"group-hover:opacity-75",
						)}
					/>
				)
			)}
		</button>
	);
}
