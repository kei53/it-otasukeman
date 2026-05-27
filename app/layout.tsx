import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITお助けマン | 中小企業向け 業務自動化・ITサポート",
  description:
    "Excel・RPA・AI・Pythonを活用して、毎月の面倒な定型業務やITの困りごとを解決します。社内IT担当を雇うほどではない会社に、ちょうどいいITサポートを提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
