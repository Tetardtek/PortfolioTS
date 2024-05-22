import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { type Locale, i18n } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Turnaco Fullstack Developer",
  description: "Kevin Turnaco Fullstack Developer",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ params: { locale } }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
