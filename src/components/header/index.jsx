import React, { useEffect, useState } from "react";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import { Styled } from "./styled";

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let previousScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsHidden(currentScroll > 80 && currentScroll > previousScroll);
            previousScroll = currentScroll;
            if (currentScroll <= 20) setIsHidden(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Styled.Wrapper className={isHidden ? "hidden" : ""}>
            <div className="brand">
                <div className="titleRow">
                    <h1 className="title">Algorithms Core Notes</h1>

                    <span className="version">v1.0.0</span>
                </div>

                <p className="text">
                    Practical algorithm revision notes and JavaScript patterns.
                </p>
            </div>

            <div className="actions">
                <a
                    className="actionLink"
                    href="https://github.com/a2rp/algorithms-core-notes"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="icon" />

                    <span>GitHub</span>
                </a>

                <a
                    className="actionLink"
                    href="https://www.ashishranjan.net"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Ashish Ranjan</span>

                    <FaArrowUpRightFromSquare className="smallIcon" />
                </a>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
