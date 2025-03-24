import type { Metadata } from "next";
import Providers from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster} from '@/components/ui/sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr.CMD's Predictor",
  description: "predictor tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster
            position="top-right"
            expand={true}
            richColors
            closeButton
          />
      </body>
    </html>
  );
}
