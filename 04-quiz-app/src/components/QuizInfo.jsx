import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

const StyledQuizInfo = styled.header`
	display: flex;
	align-items: center;
	gap: 1rem;
	background-color: ${(props) => props.$bg};
	padding-bottom: 0;

	& span {
		color: var(--font-light);
		font-weight: 700;
		font-size: ${(props) => props.$fontSize}rem;
	}

	@media only screen and (min-width: 600px) {
		margin-bottom: 2.5rem;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => props.$iconSize}px;
	height: ${(props) => props.$iconSize}px;
	background-color: ${(props) => props.$iconBg};
	border-radius: 8px;
`;

function QuizInfo({ bg = "var(--bg-dark)", fontSize = 1.5, iconSize = 48 }) {
	const {
		activeQuiz: { title, icon },
	} = useContext(GameContext);

	const imgPath = `/${icon.split("/").at(-1)}`;
	const iconBg = `var(--icon-${title.toLowerCase()})`;

	return (
		<StyledQuizInfo $fontSize={fontSize} $bg={bg}>
			<Icon $iconBg={iconBg} $iconSize={iconSize}>
				<img src={imgPath} />
			</Icon>
			<span>{title}</span>
		</StyledQuizInfo>
	);
}

export default QuizInfo;
