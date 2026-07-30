import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/portfolio/Nav";

export const metadata: Metadata = {
  title: "Emma — Mathematics Graduate Portfolio",
  description:
    "Portfolio of Emma, a mathematics graduate specializing in data analysis, statistical modeling, and mathematical research.",
  openGraph: {
    title: "Emma — Mathematics Graduate Portfolio",
    description: "Data analysis, statistical modeling, and mathematical research by Emma.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pt-14">
        <Nav />
        {children}
      </body>
    </html>
  );
}
