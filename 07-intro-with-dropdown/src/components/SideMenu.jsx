import { useState } from "react";
import { createPortal } from "react-dom";
import { css } from "styled-components";

import styled from "styled-components";
import Dropdown from "./Dropdown";
import Backdrop from "./Backdrop";
import CompanyMenu from "./CompanyMenu";
import FeaturesMenu from "./FeaturesMenu";

const StyledSideMenu = styled.div`
	position: fixed;
	width: 60vw;
	height: 100%;
	background-color: var(--almost-white);
	top: 0;
	right: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
	padding-top: 5rem;
	gap: 1.5rem;
`;

const ToggleBtn = styled.img`
	position: ${(props) => (props.$isFixed ? "fixed" : "relative")};
	top: ${(props) => (props.$isFixed ? "2rem" : "0")};
	right: ${(props) => (props.$isFixed ? "1rem" : "0")};
	z-index: 30;
`;

const Menus = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const variations = {
	regular: css`
		box-shadow: none;
	`,

	strong: css`
		box-shadow: inset 0 0 0 2px var(--medium-gray);
	`,
};

const Action = styled.button`
	max-width: 200px;
	width: 100%;
	margin: auto;
	font-family: var(--font);
	border: none;
	padding: none;
	background-color: transparent;
	border-radius: 12px;
	padding: 0.75rem 0rem;
	font-size: 1rem;
	color: var(--medium-gray);
	cursor: pointer;
	transition: all 0.3s;
	${(props) => variations[props.$variation]}

	&:hover {
		color: var(--almost-black);
		box-shadow: inset 0 0 0 2px var(--almost-black);
	}
`;

Action.defaultProps = {
	variation: "regular",
};

const MenuItem = styled.div`
	color: var(--medium-gray);
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		color: var(--almost-black);
	}
`;

function SideMenu() {
	const [showMenu, setShowMenu] = useState(false);

	function handleToggleMenu() {
		setShowMenu((prev) => !prev);
	}

	return (
		<div>
			<ToggleBtn
				src={showMenu ? "/icon-close-menu.svg" : "/icon-menu.svg"}
				onClick={handleToggleMenu}
				$isFixed={showMenu}
			/>
			{showMenu &&
				createPortal(
					<StyledSideMenu role="sidemenu">
						<Menus>
							<Dropdown>
								<Dropdown.Label>Features</Dropdown.Label>
								<Dropdown.Menu menuElement={<FeaturesMenu />} />
							</Dropdown>
							<Dropdown>
								<Dropdown.Label>Company</Dropdown.Label>
								<Dropdown.Menu menuElement={<CompanyMenu />} />
							</Dropdown>
							<MenuItem>Careers</MenuItem>
							<MenuItem>About</MenuItem>
						</Menus>
						<Actions>
							<Action>Login</Action>
							<Action $variation="strong">Register</Action>
						</Actions>
					</StyledSideMenu>,
					document.body
				)}
			{showMenu && createPortal(<Backdrop handleToggleMenu={handleToggleMenu} />, document.body)}
		</div>
	);
}

export default SideMenu;
