import { useContext } from "react";
import { WidthContext } from "../contexts/WidthContext";

import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Main from "./Main";

const StyledMainContainer = styled.div`
	max-width: 1100px;
	margin: auto;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 900px) {
		flex-direction: row-reverse;
		gap: 5rem;
	}
`;

function Layout() {
	const { screenWidth } = useContext(WidthContext);

	return (
		<StyledMainContainer>
			<Navbar />
			<Container $screenWidth={screenWidth}>
				<Hero />
				<Main />
			</Container>
		</StyledMainContainer>
	);
}

export default Layout;
