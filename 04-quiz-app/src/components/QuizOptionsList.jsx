import styled from "styled-components";

import QuizOption from "./QuizOption";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.25rem;

	@media only screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 5rem;
	}
`;

const Title = styled.h1`
	font-size: 2rem;
	line-height: 1.15;
	display: flex;
	flex-direction: column;
	font-weight: 300;
	margin-bottom: 0.85rem;
	color: var(--font-light);

	& span {
		font-weight: 900;
		color: var(--font-light);
	}

	& + span {
		color: var(--font-gray);
		font-size: 0.85rem;
		font-style: italic;
	}
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-grow: 1;
`;

const Loader = styled.p`
	font-size: 2rem;
	letter-spacing: 0.5rem;
	font-weight: 700;
	color: var(--accent);
`;

const Error = styled.p`
	font-size: 2rem;
	font-weight: 700;
	color: var(--error);
`;

function QuizOptionsList({ quizzes, isLoading, err }) {
	return (
		<Container>
			<div>
				<Title>
					Welcome to the <span>Frontend Quiz!</span>
				</Title>
				<span>Pick a subject to get started.</span>
			</div>
			{quizzes.length !== 0 && (
				<List>
					{quizzes.map((quiz) => (
						<QuizOption key={quiz.id} quiz={quiz} />
					))}
				</List>
			)}
			{isLoading && <Loader>Loading...</Loader>}
			{err && <Error>{err}</Error>}
		</Container>
	);
}

export default QuizOptionsList;
