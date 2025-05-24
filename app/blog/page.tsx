import type {Metadata} from "next";
import "../globals.css";
import Container from "@/components/container";
import {getAllBlogs} from "@/utils/mdx";
import {Link} from "next-view-transitions";
import {formatDate} from "@/lib/utils";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";

export const metadata: Metadata = {
  title: "All blogs - Chaitanya Gupta",
  description:
    "All blogs by Chaitanya Gupta. All blogs are about my learnings and experiences in the field of software development and solana.",
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  const truncateDescription = (
    description: string,
    maxLength: number = 100,
  ) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };

  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading as="h1">All blogs</Heading>
        <Subheading>
          This is Chaitanya Gupta&apos;s portfolio, A passionate software
          engineer who builds scalable and efficient systems. Loves solana and
          wants to be a polymath
        </Subheading>

        <div className="flex flex-col py-8">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug}>
              <div className="flex flex-col gap-2 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-primary text-base font-bold tracking-tight">
                    {blog.frontmatter?.title}
                  </h2>
                  <p className="text-secondary text-sm md:text-sm">
                    {formatDate(blog.frontmatter?.date ?? "")}
                  </p>
                </div>
                <p className="text-secondary max-w-lg text-sm md:text-sm">
                  {truncateDescription(
                    blog.frontmatter?.description ?? "",
                    150,
                  )}
                </p>
                {/* {blog.frontmatter?.image && (
                  <Image
                    src={blog.frontmatter?.image}
                    alt={blog.frontmatter?.title}
                    width={1000}
                    height={1000}
                    className="mx-auto max-h-96 w-full max-w-2xl rounded-2xl border border-neutral-200 shadow-2xl"
                  />
                )} */}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
