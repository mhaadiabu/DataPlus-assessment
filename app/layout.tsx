import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'DataPlus.de',
	description:
		'Airtime and data bundles purcase mini-shop built with Next.js and Tailwind CSS',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`{poppins.className} min-h-screen antialiased`}>
				<main className='bg-slate-50 w-full min-h-screen mx-0 flex-grow p-6 sm:p-8 md:p-12 lg:p-20'>
					{children}
				</main>
			</body>
		</html>
	);
}
