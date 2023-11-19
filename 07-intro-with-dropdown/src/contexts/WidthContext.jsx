import { createContext } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";

const WidthContext = createContext();

function WidthProvider({ children }) {
	const screenWidth = useScreenWidth();

	return <WidthContext.Provider value={{ screenWidth }}>{children}</WidthContext.Provider>;
}

export { WidthContext, WidthProvider };
