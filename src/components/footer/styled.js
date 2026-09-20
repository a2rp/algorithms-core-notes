// components/footer/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .socialLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 0.45rem;
            margin-left: auto;
        }

        .socialLinks a {
            display: grid;
            width: 2rem;
            height: 2rem;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 0.55rem;
            color: var(--color-text-muted);
            transition: box-shadow 160ms ease, text-shadow 160ms ease;
        }

        .socialLinks a:hover {
            box-shadow: 0 0.6rem 1.3rem rgba(56, 189, 248, 0.14);
            text-shadow: 0 0 0.65rem rgba(125, 211, 252, 0.5);
        }

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;

            .socialLinks {
                margin-left: 0;
            }
        }
    `,
};
