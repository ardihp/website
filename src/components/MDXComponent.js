import Link from "next/link";

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

export const H2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor} className="flex mt-6 mb-2 scroll-my-24">
      <Link href={link}>
        <a className="text-gray-600/80 no-underline hover:underline underline-offset-1">
          {children}
        </a>
      </Link>
    </h2>
  );
};
