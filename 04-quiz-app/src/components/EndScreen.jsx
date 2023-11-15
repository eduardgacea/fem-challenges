import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

import QuizInfo from "./QuizInfo";
import Button from "./Button";

const StyledEndScreen = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin: auto;
`;

const Title = styled.h1`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	& :first-child,
	& :last-child {
		color: var(--font-light);
	}

	& :first-child {
		font-weight: 300;
		font-size: 2rem;
	}

	& :last-child {
		font-weight: 700;
	}
`;

const Stats = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	background-color: var(--bg-dark-light);
	margin-bottom: 0.5rem;
	padding: 1.5rem 0rem;
	border-radius: 8px;
`;

const Score = styled.span`
	color: var(--font-light);
	font-size: 4rem;
	font-weight: 700;
`;

const OutOf = styled.span`
	font-size: 0.85rem;
	color: var(--font-gray);
`;

function EndScreen() {
	const { activeQuiz, score, resetGame } = useContext(GameContext);
	return (
		<StyledEndScreen>
			<Title>
				<span>Quiz completed</span>
				<span>You scored...</span>
			</Title>
			<Stats>
				<QuizInfo bg="var(--bg-dark-light)" />
				<Score>{score}</Score>
				<OutOf> out of {activeQuiz.questions.length}</OutOf>
			</Stats>
			<Button onClick={resetGame}>Play Again</Button>
		</StyledEndScreen>
	);
}

export default EndScreen;
