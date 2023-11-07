function Button({ children }) {
	return (
		<button className="rounded-full text-white text-xl py-4 font-bold grow bg-dark-gray-blue transition duration-300 hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue">
			{children}
		</button>
	);
}

export default Button;
