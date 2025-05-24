import "../../globals.css";
import Container from "@/components/container";
import {getSingleBlog} from "@/utils/mdx";
import {redirect} from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const {frontmatter} = (await getSingleBlog(slug)) ?? {};

  return {
    title: frontmatter?.title + " - Chaitanya Gupta",
    description: frontmatter?.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const {content, frontmatter} = (await getSingleBlog(slug)) ?? {};

  if (!content) {
    redirect("/blog");
  }

  console.log(frontmatter);

  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <article className="prose mx-auto">{content}</article>
      </Container>
    </div>
  );
}
