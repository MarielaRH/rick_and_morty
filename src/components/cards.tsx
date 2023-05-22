import { ThemeContext } from "@/store/themeContext";
import { useRouter } from "next/router";
import { useContext } from "react";

type CardsType = {
  title: string;
  description: string;
  redirectRoute: string;
};

const Cards = ({ title, description, redirectRoute }: CardsType) => {
  const {theme} = useContext(ThemeContext);
  const router = useRouter();

  // Redirect the page
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(redirectRoute);
  };

  return (
    <div
      className={`m-3 p-3 flex flex-col gap-3 max-w-[250px] w-[250px] transition-all duration-300 background-card-${theme} card-hover`}
      onClick={handleClick}
    >
      <p className="text-2xl text-center font-bold title-purple">{title}</p>
      <p className="text-center font-light text-base">{description}</p>
    </div>
  );
};

export default Cards;
