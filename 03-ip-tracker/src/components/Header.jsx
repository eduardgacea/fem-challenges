import { useState, useEffect } from "react";

const DESKTOP_WIDTH = 640;

function Header({ children }) {
    const [isDesktop, setIsDesktop] = useState(
        () => window.innerWidth >= DESKTOP_WIDTH,
    );

    useEffect(function () {
        function handleResize() {
            setIsDesktop(window.innerWidth >= DESKTOP_WIDTH);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isDesktop)
        return (
            <div className="bg-[url('/pattern-bg-desktop.png')] bg-cover">
                <header className="relative mx-auto flex w-[87%] flex-col gap-4 pb-36 pt-4 sm:pb-16">
                    <h1 className="text-center text-2xl font-medium text-stone-50">
                        IP Address Tracker
                    </h1>
                    {children}
                </header>
            </div>
        );

    return (
        <div className="bg-[url('/pattern-bg-mobile.png')] bg-cover">
            <header className="relative mx-auto flex w-[87%] flex-col gap-4 pb-36 pt-4 sm:pb-16">
                <h1 className="text-center text-2xl font-medium text-stone-50">
                    IP Address Tracker
                </h1>
                {children}
            </header>
        </div>
    );
}

export default Header;
