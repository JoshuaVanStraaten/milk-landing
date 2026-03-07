import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milk.app.link"),
  title: "Milk — Compare Grocery Prices Across SA Stores",
  description:
    "Find the best grocery deals at Pick n Pay, Woolworths, Checkers and Shoprite. Milk compares prices so you don't have to. Save R200+ every month.",
  keywords:
    "SA grocery prices, compare grocery prices South Africa, cheapest groceries near me, Pick n Pay deals, Woolworths specials, Checkers prices, Shoprite deals",
  openGraph: {
    title: "Milk — Compare Grocery Prices Across SA Stores",
    description:
      "Compare prices at Pick n Pay, Woolworths, Checkers and Shoprite. One app. All the savings.",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Milk — SA Grocery Price Comparison App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk — Compare Grocery Prices Across SA Stores",
    description:
      "Compare prices at Pick n Pay, Woolworths, Checkers and Shoprite. One app. All the savings.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={dmSans.variable}>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
