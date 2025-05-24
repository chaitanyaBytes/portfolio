import Container from "@/components/container";
import {Collage} from "@/components/collage";
import {Timeline} from "@/components/timeline";

export default function Whoami() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am a software engineer who loves building scalable and efficient
          systems. I am currently working at{" "}
          <a href="https://www.google.com" className="text-primary">
            Google
          </a>
        </p>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I like to travel and and explore the mountains. I am a mountain
          person.
        </p>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I lift by the way.
        </p>
        <Collage />
        <Timeline />
      </Container>
    </div>
  );
}
