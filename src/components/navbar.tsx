import { OPTIONS } from "@/utils/options";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";


const OPTION_TYPE_VALUE = {
  rm_character: 'rm_character',
  rm_location: 'rm_location',
  rm_episode:'rm_episode'
}


const Navbar = () => {
  const [optionActive, setOptionActive] = useState(OPTION_TYPE_VALUE.rm_character)
  const route = useRouter();

  const handlerOptionActive = (optionSelective: string, optionRedirect:string) => {
    setOptionActive(optionSelective);
    route.push(optionRedirect);
  }

  return (
    <div className="mb-6 flex justify-between items-end">
      <div className="flex gap-5">
        {OPTIONS.map((option) => {
          return <div key={option.id} className={`font-medium text-lg ${optionActive == option.id ? 'title-purple' : 'text-white'}`} onClick={()=> handlerOptionActive(option.id, option.redirect)}>{option.title}</div>;
        })}
      </div>

      <div className="flex gap-3 p-3 rounded-lg" style={{'background': '#2b2d2e'}}>
        <IconSearch color="white" size={24}></IconSearch>
        <input type="text" placeholder="search by keyword"  className="bg-transparent outline-none" />
      </div>
    </div>
  );
};

export default Navbar;
