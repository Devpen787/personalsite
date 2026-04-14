import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PosthogProvider } from "@/components/PosthogProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devinson Peña",
  description:
    "Product, partnerships, GTM, Web3 adoption, and practical AI workflows. Based in Zurich. Building, writing, and showing up.",
  keywords: [
    "Web3",
    "tokenization",
    "product",
    "partnerships",
    "GTM",
    "AI workflows",
    "automation",
    "Zurich",
    "Polkadot",
    "DePIN",
    "hackathons",
  ],
  openGraph: {
    title: "Devinson Peña",
    description:
      "Product, partnerships, GTM, Web3 adoption, and practical AI workflows. Based in Zurich.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <PosthogProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </PosthogProvider>
      </body>
    </html>
  );
}
