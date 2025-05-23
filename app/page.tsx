import Container from "@/components/container";

export default function Home() {
  return (
    <div className="flex min-h-[200vh] flex-col items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello World
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          This is Chaitanya Gupta&apos;s portfolio, A passionate software
          engineer who builds scalable and efficient systems. Loves solana and
          wants to be a polymath
        </p>
      </Container>
    </div>
  );
}
