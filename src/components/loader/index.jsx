import React from "react";
import { FaCircleNotch } from "react-icons/fa6";

const Loader = () => {
    return (
        <div className="loader">
            <FaCircleNotch className="loaderIcon" />

            <p className="text">Loading content...</p>
        </div>
    );
};

export default Loader;
