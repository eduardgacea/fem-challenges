function Input({ ip, setIp, fetchAddress }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                fetchAddress();
            }}
            className="flex justify-center"
        >
            <input
                type="text"
                placeholder="Search for an IP address"
                value={ip}
                onChange={(e) => {
                    setIp(e.target.value);
                }}
                className="w-full max-w-[501px] rounded-l-xl px-3 py-1 font-sans text-sm outline-none"
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    fetchAddress();
                }}
                className="rounded-r-xl bg-stone-900 p-4 outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        d="M2 1l6 6-6 6"
                    />
                </svg>
            </button>
        </form>
    );
}

export default Input;
