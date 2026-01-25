import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="w-full h-16 gap-5 fixed shadow-light-300 dark:shadow-none bg-light900_dark200 flex-between items-center px-4">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
