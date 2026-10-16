import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Apple devices use San Francisco; everything else falls back to Inter
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", preload: false });

const title = "Ovra Browser: a fast browser for Mac, iPhone and iPad";
const description =
  "Ovra is a fast web browser built on WebKit. It blocks ads and trackers, and with an Ovra account your tabs, bookmarks and history follow you across devices.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ovra.pages.dev"),
  title,
  description,
  applicationName: "Ovra",
  icons: { icon: "/ovra-icon.png", apple: "/apple-touch-icon.png" },
  openGraph: { title, description, images: ["/shots/theme-aurora.jpg"], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/shots/theme-aurora.jpg"] },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-[17px] leading-[1.47] tracking-[-0.022em] text-ink">{children}</body>
    </html>
  );
}
