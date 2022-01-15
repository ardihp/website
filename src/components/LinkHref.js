import React from "react";
import Link from "next/link";

function LinkHref({ href, target, body }) {
  return (
    <Link href={href}>
      <a
        target={target}
        rel="noreferrer"
        className="dark:text-sky-400 text-sky-500/70 underline underline-offset-2"
      >
        {body}
      </a>
    </Link>
  );
}

export default LinkHref;
