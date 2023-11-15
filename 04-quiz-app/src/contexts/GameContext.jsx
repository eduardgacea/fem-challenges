import { createContext, useReducer } from "react";

const GameContext = createContext(null);

const initialState = {
	gameState: "idle",
	activeQuiz: {},
	curQuestionIdx: undefined,
	selectedOptionIdx: undefined,
	score: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "selectQuiz":
			return { ...state, gameState: "active", activeQuiz: action.payload, curQuestionIdx: 0 };
		case "selectOption":
			if (state.gameState === "submit") return { ...state };
			return { ...state, selectedOptionIdx: action.payload };
		case "submitOption": {
			const curQuestion = state.activeQuiz.questions[state.curQuestionIdx];
			const correctOptionIdx = curQuestion.options.findIndex((option) => option === curQuestion.answer);
			return {
				...state,
				gameState: "submit",
				score: state.selectedOptionIdx === correctOptionIdx ? state.score + 1 : state.score,
			};
		}
		case "nextQuestion": {
			const quizLength = state.activeQuiz.questions.length;
			if (state.curQuestionIdx === quizLength - 1)
				return {
					...state,
					gameState: "finished",
					curQuestionIdx: undefined,
					selectedOptionIdx: undefined,
				};
			return {
				...state,
				gameState: "active",
				curQuestionIdx: state.curQuestionIdx + 1,
				selectedOptionIdx: undefined,
			};
		}
		case "resetGame":
			return { ...initialState };
		default:
			throw new Error(`action type (${action.type}) is not recognized`);
	}
}

function GameContextProvider({ children }) {
	const [{ gameState, activeQuiz, curQuestionIdx, selectedOptionIdx, score }, dispatch] = useReducer(
		reducer,
		initialState
	);

	function selectQuiz(quiz) {
		dispatch({ type: "selectQuiz", payload: quiz });
	}

	function selectOption(idx) {
		dispatch({ type: "selectOption", payload: idx });
	}

	function submitOption() {
		dispatch({ type: "submitOption" });
	}

	function nextQuestion() {
		dispatch({ type: "nextQuestion" });
	}

	function resetGame() {
		dispatch({ type: "resetGame" });
	}

	return (
		<GameContext.Provider
			value={{
				gameState,
				activeQuiz,
				curQuestionIdx,
				selectedOptionIdx,
				score,
				selectQuiz,
				selectOption,
				submitOption,
				nextQuestion,
				resetGame,
			}}>
			{children}
		</GameContext.Provider>
	);
}

export { GameContext, GameContextProvider };
