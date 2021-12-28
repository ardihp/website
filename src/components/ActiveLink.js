import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${
        router.asPath === href ? "text-sky-400" : "text-gray-400"
      } duration-300 py-2 px-3 hover:bg-sky-300/50 hover:text-white rounded-lg`}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
