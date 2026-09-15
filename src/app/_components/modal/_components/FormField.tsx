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
				<span className="text-box-trim">{label}</span>
				<span className="text-box-trim text-red-500">*</span>
			</label>
			{children}
		</div>
	);
}
