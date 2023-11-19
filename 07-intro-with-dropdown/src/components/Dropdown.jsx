import { createContext, useContext, useState } from "react";
import { css } from "styled-components";

import styled from "styled-components";

const StyledLabel = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--medium-gray);
	cursor: pointer;
	user-select: none;

	& :hover {
		text-decoration: underline;
		color: var(--almost-black);
	}
`;

const variations = {
	fixed: css`
		margin-top: 1rem;
		position: fixed;
		background-color: #fff;
		padding-bottom: 1rem;
		padding-right: 1.5rem;
		border-radius: 8px;
		z-index: 30;
		box-shadow: 0 0 24px 2px rgba(55, 55, 55, 0.5);
	`,
};

const DropdownMenu = styled.div`
	${(props) => variations[props.$type]}
	transform: translate(${(props) => props.$offset}px);
`;

const DropdownContext = createContext();

function Dropdown({ children }) {
	const [isCollapsed, setIsCollapsed] = useState(true);

	function toggleDropdown(e) {
		if (e.target.nodeName === "DIV") return;
		setIsCollapsed((prev) => !prev);
	}

	return (
		<DropdownContext.Provider value={{ isCollapsed, toggleDropdown }}>
			<div>{children}</div>
		</DropdownContext.Provider>
	);
}

function Label({ children }) {
	const { isCollapsed, toggleDropdown } = useContext(DropdownContext);

	return (
		<StyledLabel onClick={toggleDropdown}>
			<span>{children}</span>
			<img src={isCollapsed ? "/icon-arrow-down.svg" : "/icon-arrow-up.svg"} />
		</StyledLabel>
	);
}

function Menu({ menuElement, type = "inline", offset = 0 }) {
	const { isCollapsed } = useContext(DropdownContext);

	if (isCollapsed || !menuElement) return;

	return (
		<DropdownMenu role="dropdown" $type={type} $offset={offset}>
			{menuElement}
		</DropdownMenu>
	);
}

Dropdown.Label = Label;
Dropdown.Menu = Menu;

export default Dropdown;
