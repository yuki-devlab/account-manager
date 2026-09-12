import "@/app/globals.css";
import { inter, notoSansJP } from "@/app/fonts";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${inter.variable} ${notoSansJP.variable}`}>
				{children}
			</body>
		</html>
	);
}
