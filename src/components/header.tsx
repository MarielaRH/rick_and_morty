import { Creepster } from "next/font/google";
import Link from "next/link";

const creepter = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className={creepter.className}>
      <nav className="bg-emerald-600 flex text-xl tracking-widest">
        <ul className="flex justify-between items-center w-screen p-4 h-[60px]">
          <li>
            <Link href={"/"}>Rick and Morty</Link>
          </li>
          <li>
            <Link href={"/about"}>About Creator</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
