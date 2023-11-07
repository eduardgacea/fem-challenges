import Header from "./components/Header";
import ResultsList from "./components/ResultsList";

function App() {
	return (
		<div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-stretch md:py-12 md:px-20 lg:px-24 lg:inline-flex lg:m-auto">
			<Header />
			<ResultsList />
		</div>
	);
}

export default App;
