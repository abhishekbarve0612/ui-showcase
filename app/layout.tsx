"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@abhishekbarve/components/styles";
import "./globals.css";
import {
  Footer,
  Header,
  Heading,
  Main,
  Navbar,
  Section,
  ThemeProvider,
} from "@abhishekbarve/components";
import Link from "next/link";
import DarkMode from "@/client-components/DarkMode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
          <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <Header>
              <Navbar>
                <Navbar.Brand>UI Showcase</Navbar.Brand>
                <Navbar.Group align="right">
                  <Link href="/">
                    <Navbar.Item>Home</Navbar.Item>
                  </Link>
                  <Link href="/about">
                    <Navbar.Item>About</Navbar.Item>
                  </Link>
                  <Link href="/contact">
                    <Navbar.Item>Contact</Navbar.Item>
                  </Link>
                  <DarkMode />
                </Navbar.Group>
              </Navbar>
            </Header>
            <Main>{children}</Main>
            <Footer>
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400">
                  &copy; {new Date().getFullYear()} UI Showcase. All rights
                  reserved.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="/"
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
