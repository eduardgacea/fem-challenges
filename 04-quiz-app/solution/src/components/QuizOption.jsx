import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

const ListItem = styled.li`
	display: flex;
	align-items: center;
	gap: 1rem;
	background-color: var(--bg-dark-light);
	padding: 0.5rem 0.5rem;
	color: var(--font-light);
	font-weight: 500;
	letter-spacing: 0.1rem;
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.4s;

	&:hover {
		background-color: ${(props) => props.$iconContainerHoverColor};
	}
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.$iconContainerBgColor};
	border-radius: 12px;
	height: 48px;
	padding: 0.25rem;
`;

function QuizOption({ quiz }) {
	const { selectQuiz } = useContext(GameContext);

	const imgPath = `/${quiz.icon.split("/").at(-1)}`;
	const iconContainerBgColor = `var(--icon-${quiz.title.toLowerCase()})`;
	const iconContainerHoverColor = `var(--icon-${quiz.title.toLowerCase()}-strong)`;

	return (
		<ListItem
			$iconContainerHoverColor={iconContainerHoverColor}
			onClick={() => {
				selectQuiz(quiz);
			}}>
			<IconContainer
				$iconContainerBgColor={iconContainerBgColor}
				$iconContainerHoverColor={iconContainerHoverColor}>
				<img src={imgPath} />
			</IconContainer>
			<span>{quiz.title}</span>
		</ListItem>
	);
}

export default QuizOption;
