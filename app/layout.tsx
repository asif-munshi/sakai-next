import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sakai Next',
    description: 'Created by Asif Munshi'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <PrimeReactProvider>
                    <main>{children}</main>
                </PrimeReactProvider>
            </body>
        </html>
    );
}
