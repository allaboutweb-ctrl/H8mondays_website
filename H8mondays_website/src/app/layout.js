import localFont from 'next/font/local';
import { DM_Mono } from 'next/font/google';

import "./globals.css";

import ClientLayout from "@/client-layout";

const nmFont = localFont({
  src: '../../public/fonts/nm/nm-medium.otf',
  variable: '--font-nm',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
});

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "H8 Mondays",
  description: "H8 Mondays Website Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${nmFont.variable} ${dmMono.variable}`}>
      <body suppressHydrationWarning className={nmFont.className}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
