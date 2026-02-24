// src/about/aboutAlgorithms/index.jsx
import React from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiShuffle,
    FiTrendingUp,
    FiClock,
    FiTarget,
} from "react-icons/fi";

const AboutAlgorithms = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <div className="top">
                    <div className="left">
                        <div className="iconBox">
                            <FiShuffle />
                        </div>
                        <div className="titleBlock">
                            <h2 className="title">About Algorithms</h2>
                            <p className="subtitle">
                                Patterns, correctness, and performance thinking
                            </p>
                        </div>
                    </div>

                    <div className="pillRow">
                        <span className="pill">
                            <FiTarget /> Correctness
                        </span>
                        <span className="pill">
                            <FiCpu /> Efficiency
                        </span>
                        <span className="pill">
                            <FiTrendingUp /> Patterns
                        </span>
                    </div>
                </div>

                <div className="body">
                    <p>
                        Algorithms are step-by-step procedures for solving
                        problems. They transform an input into an output through
                        a clear sequence of operations. A good algorithm is not
                        just one that works, but one that is correct under all
                        valid inputs and efficient under realistic constraints.
                    </p>

                    <p>
                        Algorithmic thinking is about choosing the right
                        approach. Sometimes a brute force solution works. Often
                        it does not. Patterns like binary search, sliding
                        window, two pointers, recursion, greedy, dynamic
                        programming, and graph traversal let you solve large
                        problem spaces without guessing.
                    </p>

                    <p>
                        This project is a single-page revision system for core
                        algorithms using clean JavaScript examples. Each topic
                        highlights the idea, the pattern, the time and space
                        cost, and the common mistakes. The goal is fast recall
                        and stronger decision-making during interviews and real
                        development work.
                    </p>
                </div>

                <div className="metaBar">
                    <span className="metaLeft">
                        <span className="metaIcon">
                            <FiClock />
                        </span>
                        <span className="metaLabel">Last updated</span>
                    </span>

                    <span className="metaValue">{formattedDateTime}</span>
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AboutAlgorithms;
