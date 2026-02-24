import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,

    Header: styled.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
            border: 1px solid var(--color-border);
        }

        &:hover .icon {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,

    Content: styled.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
            border: 1px solid var(--color-border);

            strong {
                color: var(--color-text-primary);
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--color-text-primary);
                }
            }

            p {
                font-size: 14px;
                line-height: 1.65;
                margin-bottom: 10px;
                color: var(--color-text-secondary);
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
                margin-top: 2px;
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
                color: var(--color-text-primary);
                margin-top: 10px;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            padding: 24px 18px;

            .grid {
                grid-template-columns: 1fr;
            }

            .intro {
                padding: 14px;
            }

            .card {
                padding: 16px;
            }
        }
    `,
};
