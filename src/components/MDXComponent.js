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
    <p className="font-manrope font-bold dark:text-slate-300 text-gray-600/70">
      {children}
    </p>
  );
};

export const H2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor} className="flex font-fredoka mt-6 mb-4 scroll-my-24">
      <Link
        href={link}
        className="dark:text-slate-100 text-gray-600/80 no-underline hover:underline underline-offset-1 font-semibold"
      >
        {children}
      </Link>
    </h2>
  );
};

export const Images = ({ src, alt, height, width }) => {
  return <Image src={src} alt={alt} height={height} width={width} priority />;
};
