import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "REUP | Buy & Sell Secondhand Fashion",
  description: "The marketplace for pre-loved clothes. Buy and sell secondhand fashion with ease. Find your next grail.",
  keywords: ["fashion", "secondhand", "vintage", "clothing", "marketplace", "streetwear"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen antialiased">
        <AuthProvider>
          <Navbar />
          <main className="pt-[7.5rem] md:pt-16">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
