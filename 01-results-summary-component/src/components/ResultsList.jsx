import results from "../data.js";
import Button from "./Button.jsx";
import Result from "./Result";

function ResultsList() {
	return (
		<div className="flex flex-col gap-6 w-full px-6">
			<p className="font-bold text-lg">Summary</p>
			{results.map((result) => (
				<Result key={result.id} category={result.category} score={result.score} icon={result.icon} />
			))}
			<Button>Continue</Button>
		</div>
	);
}

export default ResultsList;
