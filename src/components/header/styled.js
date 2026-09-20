import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 100;
        min-height: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding: 0.9rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(5, 5, 6, 0.96);
        backdrop-filter: blur(1rem);
        transform: translateY(0);
        transition: transform 220ms ease, box-shadow 220ms ease;

        &.hidden {
            transform: translateY(-110%);
        }

        .brand {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }

        .title {
            font-family: Antonio, Verdana, sans-serif;
            font-size: 1.45rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0.02em;
            color: #ffffff;
        }

        .version {
            flex-shrink: 0;
            padding: 0.2rem 0.45rem;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            font-size: 0.68rem;
            color: rgba(255, 255, 255, 0.62);
            background: rgba(255, 255, 255, 0.04);
        }

        .text {
            margin-top: 0.3rem;
            font-size: 0.82rem;
            line-height: 1.45;
            color: rgba(255, 255, 255, 0.58);
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-shrink: 0;
        }

        .actionLink {
            min-height: 2.4rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.55rem 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.65rem;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.78);
            text-decoration: none;
            font-size: 0.78rem;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;
        }

        .actionLink:hover {
            box-shadow: 0 0.7rem 1.6rem rgba(56, 189, 248, 0.16);
            text-shadow: 0 0 0.7rem rgba(125, 211, 252, 0.5);
        }

        .icon {
            font-size: 1rem;
        }

        .smallIcon {
            font-size: 0.7rem;
        }

        @media (max-width: 760px) {
            min-height: 4.5rem;
            gap: 1rem;
            padding: 0.75rem 1rem;

            .text {
                display: none;
            }

            .title {
                font-size: 1.15rem;
            }

            .version {
                display: none;
            }

            .actionLink {
                width: 2.5rem;
                height: 2.5rem;
                min-height: 2.5rem;
                padding: 0;
            }

            .actionLink span {
                display: none;
            }

            .smallIcon {
                font-size: 0.9rem;
            }
        }

        @media (max-width: 420px) {
            .title {
                font-size: 1rem;
            }

            .actions {
                gap: 0.4rem;
            }

            .actionLink {
                width: 2.25rem;
                height: 2.25rem;
                min-height: 2.25rem;
            }
        }
    `,
};
