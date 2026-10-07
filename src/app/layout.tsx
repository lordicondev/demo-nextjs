import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
    title: { default: 'Lordicon × Next.js', template: '%s · Lordicon × Next.js' },
    description: 'Animated Lordicon icons in a Next.js app, with @lordicon/react.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en">
            <body>
                <header className="header">
                    <Link href="/" className="brand">
                        Lordicon × Next.js
                    </Link>
                    <nav className="nav">
                        <Link href="/">Basics</Link>
                        <Link href="/state">React state</Link>
                        <Link href="/server-rendering">Server rendering</Link>
                    </nav>
                </header>
                <main className="main">{children}</main>
            </body>
        </html>
    );
}
