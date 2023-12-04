import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quanty - AI-Powered Fundamental Analysis Platform",
  openGraph: {
    title: "Quanty - AI-Powered Fundamental Analysis Platform",
    description:
      "Quanty is an AI-powered undamental Analysis Platform that helps you find insights from the market.",
    images: [
      {
        url: "https://quanty.ai/assets/quanty-opengraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanty - AI-Powered Fundamental Analysis Platform",
    description:
      "Quanty is an AI-powered undamental Analysis Platform that helps you find insights from the market.",
    images: ["https://quanty.ai/assets/quanty-opengraph.png"],
    creator: "@pluscodeio",
  },
  metadataBase: new URL("https://quanty.ai"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
