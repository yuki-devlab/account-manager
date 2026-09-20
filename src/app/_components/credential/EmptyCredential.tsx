import AddButton from "@/app/_components/credential/_components/AddButton";
import EmptyBoxIcon from "@/components/icons/EmptyBoxIcon";

export default function EmptyCredential() {
	return (
		<div className="flex flex-col items-center gap-10">
			<EmptyBoxIcon height={200} />
			<div className="flex flex-col items-center gap-8">
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-center font-semibold text-2xl text-box-trim">
						アカウント情報が登録されていません
					</h1>
					<p className="text-center text-box-trim text-slate-500">
						アカウント情報を追加して、いつでも確認できるようにしましょう
					</p>
				</div>
				<AddButton />
			</div>
		</div>
	);
}
