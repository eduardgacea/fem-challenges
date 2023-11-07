function Header() {
	return (
		<header className="md:justify-around md:rounded-[36px] w-full bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-[36px] p-8 flex flex-col items-center gap-4">
			<div className="text-center md:space-y-4">
				<h3 className="text-light-lavender text-lg font-bold tracking-wide">Your Result</h3>
				<div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full flex flex-col gap-1.5 items-center p-8 w-[120px] h-[120px] justify-center">
					<span className="text-5xl font-extrabold text-pale-blue">76</span>
					<span className="text-sm text-pale-blue/60">of 100</span>
				</div>
			</div>

			<div className="text-center md:space-y-4">
				<h2 className="text-2xl text-pale-blue font-bold">Great</h2>
				<p className="text-center text-pale-blue/80">
					You scored higher than 65% of the people who have taken these tests.
				</p>
			</div>
		</header>
	);
}

export default Header;
