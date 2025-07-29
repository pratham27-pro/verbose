import React from "react";

interface ColorModeContextProps {
    mode: "light" | "dark";
    toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextProps>({
    mode: "dark",
    toggleColorMode: () => {},
});