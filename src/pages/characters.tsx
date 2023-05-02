import useSWR from "swr";
import { Character } from "./index";
import styles from "@/styles/loader.module.css";
import CharacterItem from "@/components/characterItem";
import Button from "@/components/button";

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

type Response = {
  info: {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null
  },
  results: Character[]
};

const Characters = () => {
  const { data: characters, isLoading } : {data: Response, isLoading: boolean} = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL_BASE}/character`,
    fetcher
  );

  if (isLoading) return <span className={styles.loader}></span>;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 ssm:grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-6 p-3">
        {characters && characters.results ? (
          characters.results.map((character: Character) => (
            <CharacterItem
              character={character}
              key={character.id}
            ></CharacterItem>
          ))
        ) : (
          <div>There isn't nothing to show :(</div>
        )}
      </div>
      <div className="flex justify-center items-center p-6">
        {characters && characters.info.prev ? (
          <Button label="Show previous characters"></Button>
        ) : (
          <></>
        )}

        {characters && characters.info.next ? (
          <Button label="Load more characters"></Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Characters;
