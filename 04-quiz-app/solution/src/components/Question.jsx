import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import styled from "styled-components";
import Option from "./Option";

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

function Question({ question }) {
	const { selectedOptionIdx } = useContext(GameContext);

	return (
		<div>
			<List>
				{question.options.map((option, idx) => {
					return <Option key={idx} option={option} isSelected={selectedOptionIdx === idx} idx={idx} />;
				})}
			</List>
		</div>
	);
}

export default Question;
