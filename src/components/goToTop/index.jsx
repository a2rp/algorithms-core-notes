import React, { useEffect, useState } from "react";

import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const MOBILE_BREAKPOINT = 900;

const GoToTop = ({ containerRef, threshold = 320 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

            const scrollTop = isMobile
                ? window.scrollY
                : (containerRef.current?.scrollTop ?? 0);

            setIsVisible(scrollTop >= threshold);
        };

        const container = containerRef.current;

        window.addEventListener("scroll", handleScroll);

        window.addEventListener("resize", handleScroll);

        container?.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);

            window.removeEventListener("resize", handleScroll);

            container?.removeEventListener("scroll", handleScroll);
        };
    }, [containerRef, threshold]);

    const handleGoToTop = () => {
        const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

        if (isMobile) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            return;
        }

        containerRef.current?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Styled.Wrapper
            type="button"
            onClick={handleGoToTop}
            aria-label="Go to top"
            title="Go to top"
        >
            <FiArrowUp />
        </Styled.Wrapper>
    );
};

export default GoToTop;
