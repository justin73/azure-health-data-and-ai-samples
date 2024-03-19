'use client';

import { inter } from '@/app/ui/fonts';
import { Providers } from '@/app/providers';

import '@/app/ui/global.css';
import { Breadcrumb, Footer } from '@/app/ui';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <main className="flex min-h-screen flex-col bg-gray-100">
            <Breadcrumb />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
