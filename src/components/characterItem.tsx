import Image from 'next/image';
import { Character } from '../pages/index';

const CharacterItem = ({character}: {character: Character}) => {
  return (
    <div className="flex flex-col justify-start items-center m-5 gap-1 font-thin p-4 hover:bg-gray-light hover:scale-110 hover:cursor-pointer hover:font-semibold transition-all duration-200">
        <Image src={character.image} alt='photo character' width={200} height={200} style={{borderRadius: '50%'}}></Image>
        <p className='text-center'>{character.name}</p>
    </div>
  )
}

export default CharacterItem;