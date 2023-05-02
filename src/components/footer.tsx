import { Creepster } from "next/font/google";

const creepter = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={creepter.className}>
      <span className="bg-emerald-600 h-[60px] flex justify-center items-center text-xl tracking-widest">
        Made by Mariela Rivas
      </span>
    </footer>
  );
};

export default Footer;
