import { Creepster } from "next/font/google";
import ThemeButton from "./themeButton";
import { useRouter } from "next/router";

const creepter = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const router = useRouter();
  return (
    <nav className={`flex text-xl tracking-widest pr-3 pl-3`}>
      <ul className="flex justify-between items-center w-screen p-4 h-[60px]">
        <li
          onClick={() => router.push("/")}
          className={
            creepter.className +
            " title-gradient main-title text-xl ssm:text-2xl sm:text-3xl md:text-3xl lg:text-3xl"
          }
        >
          Rick and Morty
        </li>
        <li className="text-xs flex items-center justify-between gap-5">
          <ThemeButton></ThemeButton>
          <span onClick={() => router.push("/about")} className="text-hover">
            About Creator
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
