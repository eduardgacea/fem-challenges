import { css } from "styled-components";

import styled from "styled-components";
import Dropdown from "./Dropdown";
import CompanyMenu from "./CompanyMenu";
import FeaturesMenu from "./FeaturesMenu";

const StyledTopMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

const Menus = styled.div`
	display: flex;
	gap: 1.25rem;
`;

const Actions = styled.div`
	display: flex;
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
	max-width: 175px;
	width: 100%;
	margin: auto;
	font-family: var(--font);
	border: none;
	padding: none;
	background-color: transparent;
	border-radius: 12px;
	padding: 0.75rem;
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

function TopMenu() {
	return (
		<StyledTopMenu>
			<Menus>
				<Dropdown>
					<Dropdown.Label>Features</Dropdown.Label>
					<Dropdown.Menu menuElement={<FeaturesMenu />} type="fixed" offset={-90} />
				</Dropdown>
				<Dropdown>
					<Dropdown.Label>Company</Dropdown.Label>
					<Dropdown.Menu menuElement={<CompanyMenu />} type="fixed" />
				</Dropdown>
				<MenuItem>Careers</MenuItem>
				<MenuItem>About</MenuItem>
			</Menus>
			<Actions>
				<Action>Login</Action>
				<Action $variation="strong">Register</Action>
			</Actions>
		</StyledTopMenu>
	);
}

export default TopMenu;
