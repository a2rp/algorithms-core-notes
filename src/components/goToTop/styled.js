import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        z-index: 120;

        width: 3rem;
        height: 3rem;

        display: grid;
        place-items: center;

        border: 1px solid var(--color-border-light);
        border-radius: 0.85rem;

        background: var(--color-surface-2);

        color: var(--color-text-primary);

        box-shadow: 0 0.75rem 2rem var(--color-shadow);

        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;

        svg {
            font-size: 1.1rem;
        }

        &:hover {
            transform: translateY(-0.15rem);

            background: var(--color-surface);

            border-color: var(--color-primary);
        }

        &:active {
            transform: translateY(0);
        }

        @media (max-width: 640px) {
            right: 1rem;
            bottom: 1rem;

            width: 2.75rem;
            height: 2.75rem;
        }
    `,
};
