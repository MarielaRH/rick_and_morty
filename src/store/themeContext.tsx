import { THEMES } from "@/utils/themes";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: THEMES["DARK"],
  changeTheme: (theme: string) => {},
});


export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {

    const [theme, setTheme] = useState(THEMES['DARK']);

    const changeTheme = (theme: string) => {
        setTheme(theme);
    }

    const context = {
        theme: theme,
        changeTheme: changeTheme
    }

    return(
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )


}