import { useContext } from "react";
import { WidthContext } from "../contexts/WidthContext.jsx";

import styled from "styled-components";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 3rem;
	justify-content: ${(props) => (props.$mode === "side" ? "space-between" : "flex-start")};
	padding: 2rem 1rem;
	height: 102px;
`;

function Navbar() {
	const { screenWidth } = useContext(WidthContext);

	return (
		<Nav $mode={screenWidth < 900 ? "side" : "top"}>
			<img src="/logo.svg" />
			{screenWidth < 900 && <SideMenu />}
			{screenWidth >= 900 && <TopMenu />}
		</Nav>
	);
}

export default Navbar;
