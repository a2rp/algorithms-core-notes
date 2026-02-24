// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutAlgorithms from "./components/aboutAlgorithms";
import FoundationLayer from "./topics/foundationLayer";
import Searching from "./topics/searching";
import Sorting from "./topics/sorting";
import RecursionPatterns from "./topics/recursionPatterns";
import SlidingWindow from "./topics/slidingWindow";
import StackQueueBasedProblems from "./topics/stackQueueBasedProblems";
import Greedy from "./topics/greedy";
import DynamicProgramming from "./topics/dynamicProgramming";
import GraphAlgorithms from "./topics/graphAlgorithms";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutAlgorithms />

                    <FoundationLayer />
                    <Searching />
                    <Sorting />
                    <RecursionPatterns />
                    <SlidingWindow />
                    <StackQueueBasedProblems />
                    <Greedy />
                    <DynamicProgramming />
                    <GraphAlgorithms />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
