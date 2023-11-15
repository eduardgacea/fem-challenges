import { useState, useEffect, useReducer } from "react";

const DESKTOP_WIDTH = 576;

const initialState = {
    advice: "",
    id: "",
    isLoading: false,
    err: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "fetch":
            return {
                ...state,
                advice: action.payload.advice,
                id: action.payload.id,
                isLoading: false,
                err: "",
            };
        case "load":
            return { ...state, isLoading: true, err: "" };
        case "err":
            return { ...state, err: action.payload, isLoading: false };
        default:
            return;
    }
}

function App() {
    const [isDesktop, setIsDesktop] = useState(
        window.innerWidth >= DESKTOP_WIDTH,
    );
    const [{ advice, id, isLoading, err }, dispatch] = useReducer(
        reducer,
        initialState,
    );

    async function fetchAdvice() {
        try {
            dispatch({ type: "load" });
            const res = await fetch("https://api.adviceslip.com/advice");
            if (!res.ok)
                throw new Error("Failed to fetch advice, try again later");
            const data = await res.json();
            dispatch({
                type: "fetch",
                payload: { advice: data.slip.advice, id: data.slip.id },
            });
        } catch (err) {
            dispatch({ type: "err", payload: err.message });
        }
    }

    useEffect(function () {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= DESKTOP_WIDTH);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(function () {
        fetchAdvice();
    }, []);

    return (
        <main className="relative mx-auto flex max-w-xl flex-col items-center rounded-xl bg-grayish-blue/50 p-6 pb-14">
            {isLoading && (
                <p className="mb-8 text-base tracking-[0.15em] text-neon-green">
                    Loading...
                </p>
            )}
            {err && (
                <p className="mb-8 text-center text-base text-red-400">{err}</p>
            )}
            {!isLoading && !err && (
                <>
                    <h1 className="text-sm uppercase tracking-[0.25em] text-neon-green">
                        advice #{id}
                    </h1>
                    <p className="mb-6 mt-8 text-center text-base text-light-cyan">
                        &ldquo;{advice}&rdquo;
                    </p>
                </>
            )}
            {isDesktop ? (
                <img
                    src="/public/pattern-divider-desktop.svg"
                    alt="divider pattern"
                />
            ) : (
                <img
                    src="/public/pattern-divider-mobile.svg"
                    alt="divider pattern"
                />
            )}
            <button
                onClick={fetchAdvice}
                className="absolute bottom-[-32px] rounded-full bg-neon-green p-5 transition duration-300 hover:shadow-[0_0_16px_5px] hover:shadow-neon-green "
            >
                <img src="/public/icon-dice.svg" alt="dice icon" />
            </button>
        </main>
    );
}

export default App;
