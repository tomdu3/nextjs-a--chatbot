import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Closeted Coders AI Chat",
  description: "Closeted Coders is a chat bot for neurodivergent coders",
  keywords: "Closeted Coders, AI Chat, Neurodivergent Coders, image generation, AI image generation, AI chat, AI coding"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

