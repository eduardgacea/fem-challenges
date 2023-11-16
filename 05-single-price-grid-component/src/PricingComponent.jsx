import styled from "styled-components";

const StyledPricingComponent = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	overflow: auto;
	max-width: 700px;
	margin: auto;

	@media screen and (min-width: 512px) {
		grid-template-columns: 1fr 1fr;
		border-radius: 12px;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	padding: 1.75rem 1.5rem;
	font-size: 1rem;
	font-weight: 400;
	gap: 1rem;

	& * {
		font-size: inherit;
		font-weight: inherit;
	}
`;

const Join = styled(Section)`
	background-color: var(--neutral-gray);

	& h2 {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--primary-cyan);
	}

	& h3 {
		font-weight: 700;
		color: var(--primary-yellow);
	}

	& p {
		line-height: 1.75;
		font-size: 0.85rem;
		color: var(--neutral-blue);
	}

	@media screen and (min-width: 512px) {
		grid-column: 1 / 3;
	}
`;

const Pricing = styled(Section)`
	background-color: var(--primary-cyan);
	color: var(--neutral-gray);

	& h2 {
		font-weight: 700;
		font-size: 1.25rem;
	}

	& h3 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: var(--neutral-gray-transparent);
	}

	& h3 span {
		font-weight: 700;
		font-size: 2rem;
		color: var(--neutral-gray);
	}

	& p {
		line-height: 1.75;
		font-size: 0.85rem;
	}

	& button {
		font-family: "Karla", "sans-serif";
		font-weight: 700;
		border: none;
		color: var(--neutral-gray);
		background-color: var(--primary-yellow);
		padding: 0.75rem;
		border-radius: 6px;
		box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.25);
		transition: all 0.4s;
		cursor: pointer;
	}

	& button:hover {
		opacity: 0.85;
	}
`;

const WhyUs = styled(Section)`
	background-color: var(--primary-cyan-transparent);
	color: var(--neutral-gray);

	& h2 {
		font-weight: 700;
		font-size: 1.25rem;
	}

	& li {
		color: var(--neutral-gray-transparent);
	}
`;

const List = styled.ul`
	list-style: none;
`;

function PricingComponent() {
	return (
		<StyledPricingComponent>
			<Join>
				<h2>Join our community</h2>
				<h3>30-day, hassle-free money back guarantee</h3>
				<p>
					Gain access to our full library of tutorials along with expert code reviews. Perfect for any
					developers who are serious about honing their skills
				</p>
			</Join>
			<Pricing>
				<h2>Monthly Subscription</h2>
				<div>
					<h3>
						<span>$29</span> per month
					</h3>
					<p>Full access for less than $1 a day</p>
				</div>
				<button>Sign Up</button>
			</Pricing>
			<WhyUs>
				<h2>Why us</h2>
				<List>
					<li>Tutorials by industry experts</li>
					<li>Peer & expert code review</li>
					<li>Coding exercises</li>
					<li>Access to our GitHub repos</li>
					<li>Community forum</li>
					<li>Flashcard decks</li>
					<li>New videos every week</li>
				</List>
			</WhyUs>
		</StyledPricingComponent>
	);
}

export default PricingComponent;
