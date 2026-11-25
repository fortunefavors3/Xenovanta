import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Royale | Play the Experience",
  description: "A next-generation social gaming platform prototype."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
