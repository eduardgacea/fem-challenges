const colorMap = {
	Reaction: "text-light-red",
	Memory: "text-orangey-yellow",
	Verbal: "text-green-teal",
	Visual: "text-cobalt-blue",
};

const bgMap = {
	Reaction: "bg-light-red/10",
	Memory: "bg-orangey-yellow/10",
	Verbal: "bg-green-teal/10",
	Visual: "bg-cobalt-blue/10",
};

function Result({ category, score, icon }) {
	const color = colorMap[category];
	const bg = bgMap[category];

	return (
		<div className={`flex justify-between ${bg} px-4 py-3 rounded-lg`}>
			<div className="flex gap-3">
				<img src={icon} alt={category} />
				<span className={`${color}`}>{category}</span>
			</div>
			<span className="font-bold">
				{score}
				<span className="text-dark-gray-blue/50 font-bold"> / 100</span>
			</span>
		</div>
	);
}

export default Result;
