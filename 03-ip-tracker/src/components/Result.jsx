function Result({ title, content }) {
    return (
        <li className="px-4 sm:flex sm:flex-col">
            <p className="text-center text-[10px] font-bold tracking-[0.15em] text-slate-400">
                {title}
            </p>
            <p className="text-center text-[16px] font-medium">{content}</p>
        </li>
    );
}

export default Result;
