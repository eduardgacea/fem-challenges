import { useContext } from "react";
import { WidthContext } from "../contexts/WidthContext";

import styled from "styled-components";

const Img = styled.img`
	width: 100%;

	@media screen and (min-width: 900px) {
		width: 40%;
	}
`;

function Hero() {
	const { screenWidth } = useContext(WidthContext);

	return (
		<Img
			src={screenWidth < 900 ? "/image-hero-mobile.png" : "/image-hero-desktop.png"}
			$screenWidth={screenWidth}
		/>
	);
}

export default Hero;
