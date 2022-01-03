import Link from "next/link";
import React from "react";

function SocialLink({ icon, body, href }) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center text-sm text-white bg-sky-500/50 space-x-2 duration-300 p-3 rounded-lg transform shadow-lg shadow-sky-400/30 hover:-translate-y-1"
      >
        <i className={icon} />
        <p className="font-manrope font-bold">{body}</p>
      </a>
    </Link>
  );
}

export default SocialLink;
