import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ children, href, ...rest }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      {...rest}
      className={`${
        router.asPath.match(href)
          ? "text-white dark:text-sky-400 dark:bg-sky-500/20 bg-sky-500/50"
          : "dark:text-white text-gray-400 hover:bg-gray-300/10"
      } duration-300 py-2 px-3 rounded-lg w-full text-center`}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
