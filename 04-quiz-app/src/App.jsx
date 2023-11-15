import { GameContextProvider } from "./contexts/GameContext.jsx";

import GlobalStyles from "./styles/GlobalStyles.js";
import Game from "./components/Game.jsx";

function App() {
	return (
		<>
			<GameContextProvider>
				<GlobalStyles />
				<Game />
			</GameContextProvider>
		</>
	);
}

export default App;
