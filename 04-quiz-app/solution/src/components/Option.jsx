import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

const ListItem = styled.li`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding: 0.5rem 0.5rem;
	font-size: 1rem;
	font-weight: 500;
	background-color: ${(props) => (props.$isSelected ? "var(--bg-dark-lightest)" : "var(--bg-dark-light)")};
	color: ${(props) => (props.$isSelected ? "var(--font-dark)" : "var(--font-light)")};
	border-radius: 12px;
	cursor: pointer;
	transition: all 0.4s;

	&:hover {
		background-color: ${(props) => (props.$isSelected ? "var(--bg-dark-lightest)" : "var(--accent-light)")};
		color: var(--font-dark);
	}
`;

const Letter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => (props.$isSelected ? "var(--font-light)" : "var(--font-dark)")};
	background-color: ${(props) => (props.$isSelected ? "var(--bg-dark)" : "var(--bg-dark-lightest)")};
	min-width: 36px;
	min-height: 36px;
	max-width: 36px;
	max-height: 36px;
	border-radius: 8px;
	font-weight: 500;
	transition: all 0.4s;
`;

const letters = ["A", "B", "C", "D"];

function Option({ option, isSelected, idx }) {
	const { selectOption, gameState, activeQuiz, curQuestionIdx } = useContext(GameContext);

	const question = activeQuiz.questions[curQuestionIdx];
	const answer = question.answer;
	const answerIdx = question.options.findIndex((option) => option === answer);

	const correctSelectedOption = gameState === "submit" && isSelected && idx === answerIdx;
	const correctUnselectedOption = gameState === "submit" && !isSelected && idx === answerIdx;
	const wrongSelectedOption = gameState === "submit" && isSelected && idx !== answerIdx;
	const otherOption = gameState === "submit" && !isSelected && idx !== answerIdx;

	return (
		<ListItem
			$isSelected={isSelected || (correctUnselectedOption && gameState === "submit")}
			onClick={() => {
				selectOption(idx);
			}}>
			<Letter $isSelected={isSelected || (correctUnselectedOption && gameState === "submit")}>
				{gameState === "active" && letters[idx]}
				{correctSelectedOption && <img src="/icon-correct.svg" />}
				{wrongSelectedOption && <img src="/icon-incorrect.svg" />}
				{correctUnselectedOption && <img src="/icon-correct.svg" />}
				{otherOption && letters[idx]}
			</Letter>
			<span>{option}</span>
		</ListItem>
	);
}

export default Option;
