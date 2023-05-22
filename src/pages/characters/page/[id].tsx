import useSWR from "swr";
import styles from "@/styles/loader.module.css";
import CharacterItem from "@/components/characterItem";
import { Character } from "../../index";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Paginator from "@/components/paginator";
import { useRouter } from "next/router";

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

type Response = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

const Characters = () => {
  const router = useRouter();
  // saves current page of characters
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  useEffect(() => {
    if (router.isReady) {
      router.query.id
        ? setCurrentPage(Number(router.query.id))
        : setCurrentPage(1);
    }
  }, [ router]);

  // get characters
  const {
    data: characters,
    isLoading,
  }: { data: Response; isLoading: boolean } = useSWR(
    currentPage
      ? `${process.env.NEXT_PUBLIC_API_URL_BASE}/character?page=${currentPage}`
      : null,
    fetcher
  );

  // if data doesn't exist yet, show a loader
  if (isLoading || !characters)
    return (
      <div className="flex justify-center items-center w-full">
        <span className={styles.loader}></span>
      </div>
    );

  // captures change of page
  const handlerChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push(`${page}`)
  };

  //TODO navbar responsive
  return (
    <div className="flex flex-col pl-8 pr-8 pt-0">
      <Navbar />
      <div className="grid grid-cols-1 ssm:grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-5">
        {characters && characters.results ? (
          characters.results.map((character: Character) => (
            <CharacterItem
              currentCharacterPage={currentPage}
              character={character}
              key={character.id}
            ></CharacterItem>
          ))
        ) : (
          <div>There isn't nothing to show :(</div>
        )}
      </div>
      <Paginator
        totalPages={characters.info.pages}
        currentPage={currentPage ? currentPage : 0}
        handlerChangePage={handlerChangePage}
      />
    </div>
  );
};

export default Characters;
