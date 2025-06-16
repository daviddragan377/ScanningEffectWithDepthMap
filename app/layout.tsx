import type { Metadata } from 'next';
import './globals.css';

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
      {/* USE LATER FOR ANALYTICS */}
      {/* <head>
        <Script
          src="//tympanus.net/codrops/adpacks/analytics.js"
          strategy="beforeInteractive"
        />
      </head> */}
      <body className="text-white bg-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
