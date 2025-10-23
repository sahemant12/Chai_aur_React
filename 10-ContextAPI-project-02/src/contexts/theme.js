import { createContext, useContext } from "react";

// Step-1:
// export const ThemeContext = createContext({ // we can give default value(optional)
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {}
// }); // No need of default value
export const ThemeContext = createContext();


// Step-2
export const ThemeProvider = ThemeContext.Provider

// Step-3
export default function useTheme(){ // custom Hook
    return useContext(ThemeContext); // now, we can access above 3 default value anywhere.
}