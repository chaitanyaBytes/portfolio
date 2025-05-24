import type {Metadata} from "next";
import "../globals.css";
import Container from "@/components/container";

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
    <Container className="prose px-10 md:pt-20 md:pb-10">{children}</Container>
  );
}
