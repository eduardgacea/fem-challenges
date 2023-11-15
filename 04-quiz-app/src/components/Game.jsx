import { useContext, useEffect, useReducer } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";

import QuizOptionsList from "./QuizOptionsList";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";

const Main = styled.main`
	padding: 1.5rem 1rem;
	height: 100%;
	background-color: var(--bg-dark);
	overflow: auto;
	max-width: 900px;
	margin: auto;

	@media only screen and (min-width: 600px) {
		padding: 3rem 2.5rem;
	}
`;

const URL_ROOT = "https://fem-quiz-api-775147abbb3f.herokuapp.com";

const initialState = {
	quizzes: [],
	isLoading: false,
	err: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "fetch":
			return { ...state, quizzes: action.payload, isLoading: false };
		case "load":
			return { ...state, isLoading: true, err: "" };
		case "error":
			return { ...state, quizzes: [], isLoading: false, err: action.payload };
		default:
			throw new Error(`action type (${action.type}) is not recognized`);
	}
}

function Game() {
	const { activeQuiz, gameState } = useContext(GameContext);
	const [{ quizzes, isLoading, err }, dispatch] = useReducer(reducer, initialState);

	useEffect(function () {
		async function fetchQuizzes() {
			try {
				dispatch({ type: "load" });
				const res = await fetch(`${URL_ROOT}/quiz`);
				const data = await res.json();
				dispatch({ type: "fetch", payload: data.quizzes });
			} catch (err) {
				dispatch({ type: "error", payload: err.message });
			}
		}
		fetchQuizzes();
	}, []);

	return (
		<>
			<Main>
				{gameState === "idle" && <QuizOptionsList quizzes={quizzes} isLoading={isLoading} err={err} />}
				{(gameState === "active" || gameState === "submit") && <Quiz />}
				{gameState === "finished" && <EndScreen />}
			</Main>
		</>
	);
}

export default Game;
