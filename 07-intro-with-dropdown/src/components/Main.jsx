import styled from "styled-components";

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 1rem;

	@media screen and (min-width: 900px) {
		justify-content: space-between;
	}
`;

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	& h1 {
		font-size: 1.85rem;
		font-weight: 700;
		text-align: center;
		color: var(--almost-black);

		@media screen and (min-width: 900px) {
			font-size: 3.5rem;
		}
		@media screen and (min-width: 997px) {
			font-size: 4rem;
		}
	}

	& p {
		color: var(--medium-gray);
		line-height: 1.45;
		text-align: center;
		font-size: 0.888888rem;
	}

	& h1,
	& p {
		@media screen and (min-width: 900px) {
			text-align: start;
		}
	}

	& button {
		background-color: var(--almost-black);
		color: var(--almost-white);
		border: none;
		outline: none;
		font-size: 1rem;
		padding: 0.85rem 1.15rem;
		align-self: center;
		border-radius: 12px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			background-color: transparent;
			color: var(--almost-black);
			box-shadow: inset 0 0 0 2px var(--almost-black);
		}

		@media screen and (min-width: 900px) {
			align-self: flex-start;
		}
	}
`;

const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
`;

const Img = styled.img`
	width: 70px;
`;

function Main() {
	return (
		<MainWrapper>
			<StyledMain>
				<h1>Make remote work</h1>
				<p>
					Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
					productivity soar.
				</p>
				<button>Learn more</button>
			</StyledMain>
			<Footer>
				<Img src="/client-databiz.svg" />
				<Img src="/client-audiophile.svg" />
				<Img src="/client-meet.svg" />
				<Img src="/client-maker.svg" />
			</Footer>
		</MainWrapper>
	);
}

export default Main;
