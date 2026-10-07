import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Raj Nishad — Software Developer",
  description:
    "Raj Nishad is a software developer in Mumbai working with Java, AI and React: Spring Boot services, RAG pipelines on AWS Bedrock, and React / Next.js apps. SDE II at Hummingbird Web Solutions.",
  openGraph: {
    title: "Raj Nishad — Software Developer",
    description: "Java, AI and React: Spring Boot services, RAG pipelines and React apps.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
