import styled from "styled-components";

const StyledButton = styled.button`
	color: var(--font-light);
	background-color: var(--accent);
	font-size: 1.25rem;
	margin-top: 1rem;
	border: none;
	border-radius: 12px;
	padding: 0.75rem 0rem;
	font-weight: 700;
	letter-spacing: 0.05rem;
	cursor: pointer;
	transition: all 0.4s;

	&:hover {
		background-color: var(--dark-light);
		color: var(--accent);
		box-shadow: inset 0 0 0 2px var(--accent);
	}
`;

function Button({ children, onClick, disabled = false }) {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
}

export default Button;
