import Link from "next/link";
import Image from "next/image";

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

export const Paragraph = ({ children }) => {
  return (
    <p className="font-manrope font-bold dark:text-slate-400 text-gray-600/70">
      {children}
    </p>
  );
};

export const H2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor} className="flex font-fredoka mt-6 mb-4 scroll-my-24">
      <Link href={link}>
        <a className="dark:text-slate-200 text-gray-600/80 no-underline hover:underline underline-offset-1">
          {children}
        </a>
      </Link>
    </h2>
  );
};

export const Images = ({ src, alt, height, width }) => {
  return <Image src={src} alt={alt} height={height} width={width} />;
};
