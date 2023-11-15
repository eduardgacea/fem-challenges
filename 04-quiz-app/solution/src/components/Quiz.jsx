import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

import Question from "./Question";
import Button from "./Button";
import QuizInfo from "./QuizInfo";

const StyledQuiz = styled.div`
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 5rem;
	}
`;

const Count = styled.div`
	color: var(--font-gray);
	font-size: 0.85rem;
	margin-top: 1rem;
`;

const Title = styled.h2`
	color: var(--font-light);
	margin: 1.5rem 0rem;
	font-size: 1.5rem;
	font-weight: 500;
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-width: 300px;
`;

const Progress = styled.progress`
	margin-bottom: 1.5rem;
	width: 100%;
	height: 0.5rem;
	appearance: none;
	border: none;

	@media only screen and (min-width: 600px) {
		margin-top: 8rem;
	}
`;

function Quiz() {
	const {
		gameState,
		submitOption,
		nextQuestion,
		curQuestionIdx,
		selectedOptionIdx,
		activeQuiz: { id, questions },
	} = useContext(GameContext);

	const question = questions[curQuestionIdx];

	function clickHandler() {
		if (gameState === "active") submitOption();
		if (gameState === "submit") nextQuestion();
	}

	return (
		<>
			{id !== undefined && <QuizInfo />}
			<StyledQuiz>
				<div>
					<Count>
						Question {curQuestionIdx + 1} out of {questions.length}
					</Count>
					<Title>{question.question}</Title>
					<Progress max={questions.length} value={curQuestionIdx}></Progress>
				</div>
				<OptionsContainer>
					<Question question={question} />
					<Button disabled={selectedOptionIdx === undefined} onClick={clickHandler}>
						{gameState === "active" ? "Submit Answer" : "Continue"}
					</Button>
				</OptionsContainer>
			</StyledQuiz>
		</>
	);
}

export default Quiz;
