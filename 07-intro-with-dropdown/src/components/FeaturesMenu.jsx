import styled from "styled-components";

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	list-style: none;
	padding-left: 1rem;
	margin-top: 1.25rem;

	& li {
		display: flex;
		gap: 1rem;
		color: var(--medium-gray);
	}
`;

function FeaturesMenu() {
	return (
		<Menu>
			<li>
				<div>
					<img src="/icon-todo.svg" />
				</div>
				<span>Todo List</span>
			</li>
			<li>
				<div>
					<img src="/icon-calendar.svg" />
				</div>
				<span>Calendar</span>
			</li>
			<li>
				<div>
					<img src="/icon-reminders.svg" />
				</div>
				<span>Reminders</span>
			</li>
			<li>
				<div>
					<img src="/icon-planning.svg" />
				</div>
				<span>Planning</span>
			</li>
		</Menu>
	);
}

export default FeaturesMenu;
