import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import AppContainer from "@/components/AppContainer/AppContainer";
import { CartProvider } from "@/context/cart.context";
import { UserProvider } from "@/context/user.context";

import { NextIntlClientProvider } from "next-intl";

import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dope Style",
    default: "Dope style",
  },
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <UserProvider>
            <CartProvider>
              <AppContainer>{children}</AppContainer>
            </CartProvider>
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
