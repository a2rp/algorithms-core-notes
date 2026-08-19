import React, { useEffect, useRef } from "react";

import { NavLink, useLocation } from "react-router-dom";

import {
    FaArrowDownWideShort,
    FaBookOpen,
    FaChartLine,
    FaCoins,
    FaDiagramProject,
    FaLayerGroup,
    FaMagnifyingGlass,
    FaRotate,
    FaTableCellsLarge,
    FaWindowMaximize,
} from "react-icons/fa6";

import { Styled } from "./styled";

const menuItems = [
    {
        label: "Overview",
        path: "/",
        icon: <FaBookOpen />,
    },
    {
        label: "Foundation Layer",
        path: "/foundation",
        icon: <FaChartLine />,
    },
    {
        label: "Searching",
        path: "/searching",
        icon: <FaMagnifyingGlass />,
    },
    {
        label: "Sorting",
        path: "/sorting",
        icon: <FaArrowDownWideShort />,
    },
    {
        label: "Recursion Patterns",
        path: "/recursion-patterns",
        icon: <FaRotate />,
    },
    {
        label: "Sliding Window",
        path: "/sliding-window",
        icon: <FaWindowMaximize />,
    },
    {
        label: "Stack & Queue",
        path: "/stack-queue",
        icon: <FaLayerGroup />,
    },
    {
        label: "Greedy",
        path: "/greedy",
        icon: <FaCoins />,
    },
    {
        label: "Dynamic Programming",
        path: "/dynamic-programming",
        icon: <FaTableCellsLarge />,
    },
    {
        label: "Graph Algorithms",
        path: "/graph-algorithms",
        icon: <FaDiagramProject />,
    },
];

const Sidebar = () => {
    const location = useLocation();

    const navigationRef = useRef(null);

    useEffect(() => {
        const scrollActiveItemIntoView = () => {
            if (window.innerWidth > 900) {
                return;
            }

            const navigation = navigationRef.current;

            if (!navigation) {
                return;
            }

            const activeItem = navigation.querySelector(".navItem.active");

            if (!activeItem) {
                return;
            }

            activeItem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        };

        const timeoutId = window.setTimeout(scrollActiveItemIntoView, 50);

        window.addEventListener("resize", scrollActiveItemIntoView);

        return () => {
            window.clearTimeout(timeoutId);

            window.removeEventListener("resize", scrollActiveItemIntoView);
        };
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <div className="sidebarHeader">
                <p className="label">Contents</p>

                <p className="text">Algorithm topics</p>
            </div>

            <nav
                ref={navigationRef}
                className="navigation"
                aria-label="Algorithm topics"
            >
                {menuItems.map(({ label, path, icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        className={({ isActive }) =>
                            `navItem ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="icon">{icon}</span>

                        <span className="title">{label}</span>
                    </NavLink>
                ))}
            </nav>
        </Styled.Wrapper>
    );
};

export default Sidebar;
