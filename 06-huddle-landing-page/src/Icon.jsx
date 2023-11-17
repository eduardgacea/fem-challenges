import styled from "styled-components";

const StyledIcon = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0.35rem;
	border: 1px solid var(--white);
	border-radius: 100%;
`;

function Icon({ icon }) {
	return <StyledIcon>{icon}</StyledIcon>;
}

export default Icon;
