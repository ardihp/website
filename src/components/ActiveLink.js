import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ children, href, ...rest }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        {...rest}
        className={`${
          router.asPath === href
            ? "text-white bg-sky-500/50"
            : "text-gray-400 hover:bg-gray-300/10"
        } duration-300 py-2 px-3 rounded-lg w-full text-center`}
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
