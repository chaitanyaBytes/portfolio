import React from "react";
import Link from "next/link";
import {GithubIcon, LinkedinIcon, TwitterIcon} from "lucide-react";
import Container from "../container";

const footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-200 px-2 py-3">
      <p className="text-secondary text-sm md:text-sm">
        &copy; {new Date().getFullYear()} Chaitanya Gupta. All rights reserved.
      </p>
      <p className="flex items-center justify-center gap-4">
        <Link href="https://github.com/chaitanyabytes" target="_blank">
          <GithubIcon className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/chaitany1704" target="_blank">
          <TwitterIcon className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/chaitanya-gupta-483476137/"
          target="_blank"
        >
          <LinkedinIcon className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </p>
    </Container>
  );
};

export default footer;
