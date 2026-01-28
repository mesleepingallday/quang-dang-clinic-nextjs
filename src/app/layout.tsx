import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";

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
    default: "Viện Thẩm Mỹ Quang Đăng - Đánh Thức Vẻ Đẹp Tiềm Ẩn",
    template: "%s | Viện Thẩm Mỹ Quang Đăng",
  },
  description: "Hệ thống thẩm mỹ viện chuẩn quốc tế hàng đầu tại Nghệ An. Chuyên điều trị da, trị mụn nám, trẻ hóa công nghệ cao.",
  keywords: ["thẩm mỹ viện", "chăm sóc da", "triệt lông", "trị mụn", "Nghệ An", "Quang Đăng"],
  authors: [{ name: "Viện Thẩm Mỹ Quang Đăng" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Viện Thẩm Mỹ Quang Đăng",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg focus:ring-2 focus:ring-green-500"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <StickyContactButtons />
        <Footer />
      </body>
    </html>
  );
}
