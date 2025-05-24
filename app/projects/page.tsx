import Container from "@/components/container";
import Projects from "@/components/projects";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";

export default function Whoami() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading as="h1">Projects</Heading>
        <Subheading>
          I am a software engineer who loves building scalable and efficient
          systems. I am currently working at{" "}
          <a href="https://www.google.com" className="text-primary">
            Google
          </a>
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
