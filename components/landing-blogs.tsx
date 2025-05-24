import {formatDate} from "@/lib/utils";
import {Link} from "next-view-transitions";
import React from "react";
import {getAllBlogs} from "@/utils/mdx";

const LandingBlogs = async () => {
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
    <div>
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm md:text-sm">
        I like to write as well sometimes.
      </p>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.frontmatter?.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm">
                {formatDate(blog.frontmatter?.date ?? "")}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
              {truncateDescription(blog.frontmatter?.description ?? "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingBlogs;
