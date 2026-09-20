import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: #050506;
        color: #ffffff;

        @media (max-width: 900px) {
            height: auto;
            min-height: 100vh;
            overflow: visible;
        }
    `,

    Header: styled.header`
        position: relative;
        z-index: 100;
    `,

    Main: styled.main`
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 15.75rem minmax(0, 1fr);
        height: calc(100vh - 5rem);
        overflow: hidden;

        .sidebarWrapper {
            min-width: 0;
            height: 100%;
            overflow: hidden;
            background: rgba(8, 8, 10, 0.96);
        }

        .contentWrapper {
            min-width: 0;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            scroll-behavior: smooth;
            padding: 0 2rem;
        }

        .contentWrapper > *:not(.footerWrapper) {
            width: min(100%, 78rem);
            margin: 0 auto;
        }

        .footerWrapper {
            width: min(100%, 78rem);
            margin: 2rem auto 0;
            padding-bottom: 1rem;
        }

        @media (max-width: 1180px) {
            grid-template-columns: 15rem minmax(0, 1fr);

            .contentWrapper {
                padding: 0 1.5rem;
            }
        }

        @media (max-width: 900px) {
            display: block;
            margin-top: 4.5rem;
            height: auto;
            min-height: 0;
            overflow: visible;

            .sidebarWrapper {
                position: sticky;
                top: 0;
                z-index: 90;
                width: 100%;
                height: auto;
                overflow: visible;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                background: rgba(8, 8, 10, 0.98);
                backdrop-filter: blur(1rem);
            }

            .contentWrapper {
                width: 100%;
                height: auto;
                min-height: 0;
                overflow: visible;
                padding: 0 1.25rem;
            }

            .footerWrapper {
                margin-top: 1.5rem;
            }
        }

        @media (max-width: 640px) {
            .contentWrapper {
                padding: 0 1rem;
            }
        }
    `,
};
