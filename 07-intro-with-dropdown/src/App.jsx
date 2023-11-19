import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";

import { WidthProvider } from "./contexts/WidthContext";

function App() {
	return (
		<WidthProvider>
			<GlobalStyles />
			<Layout />
		</WidthProvider>
	);
}

export default App;
