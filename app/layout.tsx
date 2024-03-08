import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { AuthProvider, ThemeProvider } from "@/components/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Simple Setup.dev",
  description: "A Simpler way to setup your Development Enviorment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ToastContainer />
            <main className="h-full flex flex-col">{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
