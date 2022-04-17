import Link from "next/link";
import React from "react";

function SocialLink({ icon, body, href }) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center text-sm h-12 text-white dark:bg-sky-500/20 dark:hover:bg-sky-500/30 bg-sky-500/50 hover:bg-sky-500/60 dark:border border-dashed dark:border-sky-300/70 space-x-2 duration-300 rounded-lg shadow-lg shadow-sky-400/40 dark:shadow-sky-500/25"
      >
        <i className={icon} />
        <p className="font-manrope font-bold">{body}</p>
      </a>
    </Link>
  );
}

export default SocialLink;
