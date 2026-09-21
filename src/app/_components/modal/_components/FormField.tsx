type FormFieldProps = {
	htmlFor: string;
	label: string;
	children: React.ReactNode;
};

export default function FormField({
	htmlFor,
	label,
	children,
}: FormFieldProps) {
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor={htmlFor} className="flex gap-1 font-semibold">
				<span className="text-box-trim-cap">{label}</span>
				<span className="text-box-trim-cap text-red-500">*</span>
			</label>
			{children}
		</div>
	);
}
