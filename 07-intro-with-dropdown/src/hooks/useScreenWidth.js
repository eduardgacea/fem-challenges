import { useState, useEffect } from "react";

export function useScreenWidth() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(function () {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
}
