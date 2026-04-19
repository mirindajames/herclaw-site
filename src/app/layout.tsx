import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HerClaw | Build your own AI assistant with OpenClaw",
  description:
    "HerClaw helps women install, personalize, and actually use OpenClaw with a beginner-clear starter kit, templates, and practical guidance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
