import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppContainer from "@/components/AppContainer/AppContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dope Style",
    default: "Dope style",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContainer>
          <div className="container">{children}</div>
        </AppContainer>
      </body>
    </html>
  );
}
