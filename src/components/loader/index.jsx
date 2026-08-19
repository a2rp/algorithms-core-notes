import React from "react";
import { FaCircleNotch } from "react-icons/fa6";

import { Styled } from "./styled";

const Loader = () => {
    return (
        <Styled.Wrapper>
            <FaCircleNotch className="loaderIcon" />

            <p className="text">Loading content...</p>
        </Styled.Wrapper>
    );
};

export default Loader;
