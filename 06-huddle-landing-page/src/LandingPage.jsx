import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1.25rem 1rem;
	max-width: 960px;
	margin: auto;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (min-width: 482px) {
		justify-content: flex-start;
	}
`;

const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Icons = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.75rem;
	margin-top: 1rem;

	@media screen and (min-width: 482px) {
		justify-content: flex-end;
	}
`;

const Logo = styled.img`
	width: 140px;
`;

const Hero = styled.img`
	width: 240px;

	@media screen and (min-width: 482px) {
		width: 400px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 868px) {
		flex-direction: row;
		gap: 4rem;
	}
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;

	@media screen and (min-width: 482px) {
		gap: 1.5rem;
	}
`;

const Title = styled.h1`
	color: var(--white);
	line-height: 1.5;
	font-size: 1.35rem;
	text-align: center;
`;

const P = styled.p`
	color: var(--white);
	text-align: center;
	font-family: var(--font-secondary);
`;

const Button = styled.button`
	background-color: var(--white);
	color: var(--violet);
	border: none;
	outline: none;
	padding: 0.75rem 0rem;
	border-radius: 50px;
	font-family: var(--font-secondary);
	font-size: 1rem;

	@media screen and (min-width: 482px) {
		width: 340px;
		margin: auto;
	}
`;

function LandingPage() {
	return (
		<Container>
			<LogoContainer role="logo">
				<Logo src="/logo.svg" width={140} alt="logo" />
			</LogoContainer>
			<Content>
				<HeroContainer role="presentation image">
					<Hero src="/illustration-mockups.svg" width={240} alt="presentation" />
				</HeroContainer>
				<Main>
					<Title>Build The Community Your Fans Will Love</Title>
					<P>
						Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
						Create connections with your users as you engage in genuine discussion.
					</P>
					<Button>Register</Button>
				</Main>
			</Content>
			<Icons>
				<Icon icon={<FaFacebookF style={{ color: "var(--white)", fontSize: "1rem" }} />} />
				<Icon icon={<FaTwitter style={{ color: "var(--white)", fontSize: "1rem" }} />} />
				<Icon icon={<FaInstagram style={{ color: "var(--white)", fontSize: "1rem" }} />} />
			</Icons>
		</Container>
	);
}

export default LandingPage;
