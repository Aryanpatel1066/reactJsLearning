//step1: import context and useState

import { createContext,useState } from "react";
//step2: made a context
export const ThemeContext =createContext();
//step3: make a provider that provid value
export function ThemeProvider({children}){
    const [theme,setTheme]=useState('light');
    const toggleTheme = ()=>{
        setTheme(prevThem =>(prevThem ==="light"?"dark":"light"))
    }
    return(
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
{children}
        </ThemeContext.Provider>
        </>
    )

}