import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { withBasePath } from "@/lib/site-path";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artemis – Modern Designer Portfolio Template for Framer | Neueframe",
  description:
    "Product & visual designer startups can count on. Pixel-perfect clone of the Artemis portfolio template.",
  icons: {
    icon: withBasePath("/seo/favicon.png"),
    apple: withBasePath("/seo/apple-touch-icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg-page)] text-[var(--text-body)] font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
