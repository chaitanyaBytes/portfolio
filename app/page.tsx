import Container from "@/components/container";
import Heading from "@/components/heading";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import Subheading from "@/components/subheading";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading as="h1">Chaitanya Gupta</Heading>
        <Subheading>
          This is Chaitanya Gupta&apos;s portfolio, A passionate software
          engineer who builds scalable and efficient systems. Loves solana and
          wants to be a polymath
        </Subheading>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
