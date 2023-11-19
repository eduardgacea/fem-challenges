import styled from "styled-components";

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	list-style: none;
	padding-left: 1rem;
	margin-top: 1.25rem;

	& li {
		color: var(--medium-gray);
	}
`;

function CompanyMenu() {
	return (
		<Menu>
			<li>History</li>
			<li>Our Team</li>
			<li>Blog</li>
		</Menu>
	);
}

export default CompanyMenu;
