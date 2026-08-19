import React, { lazy, Suspense, useEffect, useRef } from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Styled } from "./App.styled";

import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Loader from "./components/loader";
import GoToTop from "./components/goToTop";

const AboutAlgorithms = lazy(() => import("./components/aboutAlgorithms"));

const FoundationLayer = lazy(() => import("./topics/foundationLayer"));

const Searching = lazy(() => import("./topics/searching"));

const Sorting = lazy(() => import("./topics/sorting"));

const RecursionPatterns = lazy(() => import("./topics/recursionPatterns"));

const SlidingWindow = lazy(() => import("./topics/slidingWindow"));

const StackQueueBasedProblems = lazy(
    () => import("./topics/stackQueueBasedProblems"),
);

const Greedy = lazy(() => import("./topics/greedy"));

const DynamicProgramming = lazy(() => import("./topics/dynamicProgramming"));

const GraphAlgorithms = lazy(() => import("./topics/graphAlgorithms"));

const App = () => {
    const location = useLocation();
    const contentRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 900;

        if (isMobile) {
            window.scrollTo({
                top: 0,
                behavior: "auto",
            });

            return;
        }

        contentRef.current?.scrollTo({
            top: 0,
            behavior: "auto",
        });
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main>
                <div className="sidebarWrapper">
                    <Sidebar />
                </div>

                <div ref={contentRef} className="contentWrapper">
                    <Suspense key={location.pathname} fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<AboutAlgorithms />} />

                            <Route
                                path="/foundation"
                                element={<FoundationLayer />}
                            />

                            <Route path="/searching" element={<Searching />} />

                            <Route path="/sorting" element={<Sorting />} />

                            <Route
                                path="/recursion-patterns"
                                element={<RecursionPatterns />}
                            />

                            <Route
                                path="/sliding-window"
                                element={<SlidingWindow />}
                            />

                            <Route
                                path="/stack-queue"
                                element={<StackQueueBasedProblems />}
                            />

                            <Route path="/greedy" element={<Greedy />} />

                            <Route
                                path="/dynamic-programming"
                                element={<DynamicProgramming />}
                            />

                            <Route
                                path="/graph-algorithms"
                                element={<GraphAlgorithms />}
                            />

                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </Suspense>

                    <div className="footerWrapper">
                        <Footer />
                    </div>
                </div>
            </Styled.Main>

            <GoToTop containerRef={contentRef} />
        </Styled.Wrapper>
    );
};

export default App;
