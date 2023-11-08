import Result from "./Result";

function Results({ results }) {
    const {
        ip,
        isp,
        location: { country, city, timezone },
    } = results;

    const location = `${city}, ${country.slice(0, 2).toUpperCase()}`;

    return (
        <ul className="absolute left-1/2 top-1/2 z-[1000] w-full max-w-[900px] -translate-x-1/2 rounded-xl bg-stone-50 py-3 sm:flex sm:translate-y-1/3 sm:justify-between sm:gap-2 sm:px-4 sm:py-8 lg:justify-center lg:gap-4 lg:px-0 ">
            <Result title="IP ADDRESS" content={ip} />
            <div className="border-l-2 border-slate-300"></div>
            <Result title="LOCATION" content={location} />
            <div className="border-l-2 border-slate-300"></div>
            <Result title="TIMEZONE" content={timezone} />
            <div className="border-l-2 border-slate-300"></div>
            <Result title="ISP" content={isp} />
        </ul>
    );
}

export default Results;
