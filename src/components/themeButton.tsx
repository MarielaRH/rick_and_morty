import { ThemeContext } from "@/store/themeContext";
import { THEMES } from "@/utils/themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useContext } from "react";

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="cursor-pointer">
      {theme === THEMES["DARK"] ? (
        <IconSun color="white" size={24} onClick={()=>changeTheme(THEMES['LIGHT'])}></IconSun>
      ) : (
        <IconMoon color="black" size={24} onClick={()=>changeTheme(THEMES['DARK'])}></IconMoon>
      )}
    </div>
  );
};

export default ThemeButton;
