import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
  title: "RedHolms.Dev",
  description: "my own website",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${openSans.className} antialiased`}>
      {children}
      <div id="portal"></div>
    </body>
    </html>
  );
}
