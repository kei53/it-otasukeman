import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const title = "ITお助けマン | 姫路・兵庫県の中小企業向け 業務自動化・ITサポート";
const description =
  "姫路市を中心に、Excel・RPA・AI・Pythonを活用して毎月の面倒な定型業務やITの困りごとを解決します。社内IT担当を雇うほどではない会社に、ちょうどいいITサポートを提供します。月額3万円〜の顧問プランや単発5,000円〜のスポット対応あり。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "業務自動化",
    "ITサポート",
    "中小企業",
    "Excel自動化",
    "RPA",
    "AI導入",
    "IT顧問",
    "ChatGPT導入",
    "業務効率化",
    "Python",
    "Salesforce自動化",
    "姫路",
    "姫路市",
    "姫路 業務自動化",
    "姫路 ITサポート",
    "兵庫県",
  ],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "ITお助けマン",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
