import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TurboShop — Repuestos en 90 Minutos | Modo Nitro',
  description:
    'TurboShop: la plataforma B2B de repuestos automotrices para talleres en Chile. Accede a miles de productos y recíbelos en 90 minutos en modo nitro.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} bg-turbo-bg font-sans text-turbo-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
