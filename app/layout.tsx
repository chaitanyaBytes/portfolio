import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {ViewTransitions} from "next-view-transitions";
import Footer from "@/components/navbar/footer";
import {Toaster} from "sonner";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaitanya Gupta",
  description:
    "This is Chaitanya Gupta's portfolio, A passionate software engineer with love for building scalable and efficient systems. Loves solana and wants to be a polymath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
        >
          <Toaster position="top-center" richColors />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
