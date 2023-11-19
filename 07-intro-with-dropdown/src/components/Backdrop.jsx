import styled from "styled-components";

const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	background-color: rgba(0, 0, 0, 0.7);
	flex: 1;
`;

function Backdrop({ handleToggleMenu }) {
	return <StyledBackdrop onClick={handleToggleMenu} role="backdrop"></StyledBackdrop>;
}

export default Backdrop;
