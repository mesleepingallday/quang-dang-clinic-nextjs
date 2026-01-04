import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "Thẩm Mỹ Viện Quốc Tế Quang Đăng - Đánh Thức Vẻ Đẹp Tiềm Ẩn",
    template: "%s | Quang Đăng Aesthetic",
  },
  description: "Hệ thống thẩm mỹ viện chuẩn quốc tế hàng đầu tại Nghệ An. Chuyên điều trị da, trị mụn nám, trẻ hóa công nghệ cao.",
  keywords: ["thẩm mỹ viện", "chăm sóc da", "triệt lông", "trị mụn", "Nghệ An", "Quang Đăng"],
  authors: [{ name: "Quang Đăng Aesthetic" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Thẩm Mỹ Viện Quốc Tế Quang Đăng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <body className="font-sans bg-nude-50 text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
