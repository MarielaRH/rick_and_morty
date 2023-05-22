import Image from "next/image";
import { Character } from "../pages/index";
import { useRouter } from "next/router";

const CharacterItem = ({ character, currentCharacterPage}: { character: Character, currentCharacterPage: number | null}) => {
  const router = useRouter();

  const showDetailsCharacter = (characterId: number) => {
    router.push(`${currentCharacterPage}/detail/${characterId}`)
  };
  return (
    <div onClick={()=> showDetailsCharacter(character.id)} className="flex flex-col justify-start items-center font-base hover:bg-gray-light hover:scale-95 hover:cursor-pointer transition-all duration-200 relative">
      <Image
        src={character.image}
        alt="photo character"
        width={500}
        height={500}
        priority
        className="rounded-lg"
      ></Image>
      <div className="absolute bottom-0 bg-black/70 rounded-b-lg w-full p-2">
        <p className="text-center text-white">{character.name}</p>
      </div>
    </div>

  );
};

export default CharacterItem;
