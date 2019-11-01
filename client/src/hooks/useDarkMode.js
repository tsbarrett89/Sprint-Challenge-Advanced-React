import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValues) => {
    const [mode, setMode] = useLocalStorage('darkMode', initialValues);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (mode) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode")
        }
    }, [mode])

    return [mode, setMode];
}