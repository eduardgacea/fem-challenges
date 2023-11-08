import { RotatingLines } from "react-loader-spinner";

function Loader() {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <RotatingLines strokeColor="#6048e9" strokeWidth="2" />
        </div>
    );
}

export default Loader;
