import styled from "styled-components";

export const Styled = {
    Wrapper: styled.aside`
        height: 100%;
        padding: 1.25rem 1rem;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(10, 10, 12, 0.96);
        overflow-y: auto;

        .sidebarHeader {
            padding: 0 0.5rem 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 1rem;
        }

        .label {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.55);
        }

        .text {
            margin-top: 0.35rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .navigation {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }

        .navItem {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            min-height: 2.9rem;
            padding: 0.75rem 0.85rem;
            border: 1px solid transparent;
            border-radius: 0.75rem;
            color: rgba(255, 255, 255, 0.72);
            text-decoration: none;
            transition:
                background 160ms ease,
                color 160ms ease,
                border-color 160ms ease,
                transform 160ms ease;
        }

        .navItem:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            transform: translateX(0.15rem);
        }

        .navItem.active {
            background: rgba(255, 255, 255, 0.09);
            border-color: rgba(255, 255, 255, 0.14);
            color: #ffffff;
        }

        .icon {
            width: 1.2rem;
            min-width: 1.2rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.95rem;
        }

        .title {
            font-size: 0.9rem;
            line-height: 1.35;
        }

        @media (max-width: 900px) {
            padding: 1rem 0.75rem;

            .sidebarHeader {
                display: none;
            }

            .navigation {
                flex-direction: row;
                gap: 0.4rem;
                overflow-x: auto;
                overflow-y: hidden;
                scroll-behavior: smooth;
                scroll-snap-type: x proximity;
                padding-bottom: 0.35rem;
            }

            .navItem {
                flex-shrink: 0;
                min-height: 2.6rem;
                padding: 0.65rem 0.8rem;
                scroll-snap-align: center;
            }

            .navItem:hover {
                transform: none;
            }
        }
    `,
};
