// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import AosInitialiser from './aos-initialiser';

export const metadata: Metadata = {
  title: 'Archetype Systems',
  description: 'Official website of Archetype Systems. Designing at the edge of possibility...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white bg-gray-900 antialiased">
        <AosInitialiser />
        {children}
      </body>
    </html>
  );
}
