import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

type BlogFrontmatter = {
    title: string;
    description: string;
    date: string;
    image: string;
}

export const getSingleBlog = async (slug: string) => {
    try {

        const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
        const fileContent = await fs.promises.readFile(filePath, "utf8");

        if (!fileContent) {
            return null;
        }

        const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });

        return { content, frontmatter, slug };
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getAllBlogs = async () => {
    const filePath = path.join(process.cwd(), "content");
    const files = await fs.promises.readdir(filePath);

    const allBlogs = await Promise.all(files.map(async (file) => {
        const slug = file.replace(".mdx", "");

        const { content, frontmatter } = await getSingleBlog(slug) ?? {};

        return {
            slug,
            frontmatter,
            content,
        }
    }));

    return allBlogs;
};