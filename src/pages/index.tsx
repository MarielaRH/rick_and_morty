import Cards from "@/components/cards";
import { OPTIONS } from "@/utils/options";
import Image from "next/image";

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type Location = {
  name: string;
  url: string;
};

export default function Home({ character }: { character: Character }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 mt-6 w-full">
        <div className="shadow-image-item">
          <Image
            src={character.image}
            alt="Rick Sanchez"
            width={250}
            height={250}
            priority
            className="rounded-full"
            id="characterImage"
          ></Image>
        </div>
        <span className="text-center flex flex-col p-4">
          <span className="max-w-[700px] p-3">
            <h1 className="font-thin text-xl">
              Hello I'm Rick Sanchez and I so busy at this moment, if you want
              to know more about my story, you can click on any button below ok?
              Sorry I'm have to leave you ... bye!
            </h1>
          </span>
        </span>
        <div className="grid ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  bg-blue-800-50">
          {OPTIONS.map((item) => (
            <Cards
              title={item.title}
              key={item.id}
              description={item.description}
              redirectRoute={item.redirect}
            ></Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    process.env.API_URL_BASE
      ? `${process.env.API_URL_BASE}${process.env.API_CHARACTERS}/1`
      : "https://rickandmortyapi.com/api/character/1"
  );

  const character = await data.json();

  return {
    props: {
      character,
    },
  };
}
