import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { Header } from './components/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AVBA',
  description:
    'Asociación de Voluntarios por el Bienestar Animal de Láchar y Peñuelas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {/* <div className="absolute top-0 left-0 w-screen h-screen bg-white z-0"> */}
        {children}
        {/* </div> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
