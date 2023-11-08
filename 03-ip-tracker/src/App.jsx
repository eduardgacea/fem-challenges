import { useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import Map from "./components/Map";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";

const API_ROOT = `https://geo.ipify.org/api/v2/country,city`;
const API_KEY = `at_iHAYjyAyLnDo4wOFb6B2QY5jHEoZP`;
const API_ENDPOINT = `${API_ROOT}?apiKey=${API_KEY}`;

function App() {
    const [ip, setIp] = useState("");
    const [results, setResults] = useState(null);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function fetchAddress() {
        try {
            setIsLoading(true);
            setErr("");
            const res = await fetch(`${API_ENDPOINT}&ipAddress=${ip}`);
            if (!res.ok) throw new Error("Enter a valid IP address");
            const data = await res.json();
            setResults({ ip: data.ip, location: data.location, isp: data.isp });
        } catch (error) {
            setErr(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(function () {
        async function initialFetch() {
            try {
                setIsLoading(true);
                setErr("");
                const res = await fetch(`${API_ENDPOINT}`);
                if (!res.ok)
                    throw new Error(
                        "Could not fetch your current location right now",
                    );
                const data = await res.json();
                setResults({
                    ip: data.ip,
                    location: data.location,
                    isp: data.isp,
                });
            } catch (error) {
                setErr(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        initialFetch();
    }, []);

    return (
        <main>
            <Header>
                <Input
                    ip={ip}
                    setIp={setIp}
                    fetchAddress={fetchAddress}
                    results={results}
                />
                {results && !err && <Results results={results} />}
            </Header>
            {isLoading && <Loader />}
            {err && <ErrorComponent err={err} />}
            {results && !err && <Map results={results} />}
        </main>
    );
}

export default App;
