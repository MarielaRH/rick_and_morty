import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "@/styles/loader.module.css";
import { Character } from "../..";
import Image from "next/image";
import stylesDetail from "@/styles/character-detail.module.css";
import { Creepster } from "next/font/google";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {IconChevronLeft } from "@tabler/icons-react";

const creepter = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#e4e9f2",
      dark: "#292a2e",
    },
  },
});

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Detail = () => {
  const route = useRouter();
  const [characterId, setCharacterId] = useState<number | null>(null);

  useEffect(() => {
    if (route.isReady) {
      setCharacterId(Number(route.query.slug ? route.query.slug[2] : null));
    }
  }, [route]);

  // get character information if characterId exists
  const {
    data: character,
    isLoading,
  }: { data: Character; isLoading: boolean } = useSWR(
    characterId
      ? `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/${characterId}`
      : null,
    fetcher
  );

  // if data doesn't exist yet, show a loader
  if (isLoading || !character)
    return (
      <div className="flex justify-center items-center w-full">
        <span className={styles.loader}></span>
      </div>
    );

  return (
    <>
      <div className="grid sm:grid-cols-12 grid-rows-12  grid-cols-1 sm:grid-rows-1 w-full  bg-gray-light/50">
        <div className="col-span-6 row-span-6 flex flex-col justify-center items-center text-center p-5">
          <div className={"shadow-image-item w-fit m-10"}>
            <Image
              src={character.image}
              alt="photo character"
              width={350}
              height={350}
              priority
              id="characterImage"
              className={stylesDetail.character_img + " rounded-full"}
            ></Image>
          </div>
          <p
            className={
              creepter.className +
              " text-white-bone text-3xl tracking-widest p-10 text-center"
            }
          >
            {character.name}
          </p>
        </div>
        <div className="bg-gray-deep  col-span-6 row-span-6 flex flex-col justify-center items-center p-5">
          <p
            className={
              creepter.className + " tracking-widest text-3xl pt-5 text-center"
            }
          >
            General Information
          </p>

          <section
            id="characterInfo"
            className="font-thin flex flex-col text-lg gap-3 m-7"
          >
            <p>
              <strong>Gender</strong> {character.gender}
            </p>
            <p>
              <strong>Origin</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location</strong> {character.location.name}
            </p>
            <p>
              <strong>Specie</strong> {character.species}
            </p>
            <p>
              <strong>Status</strong> {character.status}
            </p>
          </section>

          <ThemeProvider theme={theme}>
            <Button
              onClick={() => route.back()}
              variant="text"
              color="primary"
            >
              <IconChevronLeft size={18} className="mr-2"/>
              Back
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Detail;
