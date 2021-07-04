import { createContext, useState } from "react";

const ThemeContext = createContext({
    themeUrl: '',
    selectTheme: (selectedThemeSrc) => {}
});

export function ThemeContextProvider(props) {
    const [userTheme, setUserTheme] = useState('/img/Forms-Previews/d-1.svg');

    function selectThemeHandler(selectedThemeSrc) {
        setUserTheme(selectedThemeSrc);
    }

    function themeIsSelectedHandler(themeSrc) {
        return (userTheme === themeSrc);
    }

    const context = {
        themeUrl: userTheme,
        selectTheme: selectThemeHandler,
        themeIsSelected: themeIsSelectedHandler
    };

    return <ThemeContext.Provider value={context}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeContext;