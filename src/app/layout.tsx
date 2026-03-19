import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dynamic Page Renderer',
  description: 'A CMS-driven page renderer built with Next.js App Router.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
