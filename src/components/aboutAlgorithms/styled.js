import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 2rem 0 1rem;

        .headerRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .titleSection {
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .iconBox {
            width: 3rem;
            height: 3rem;
            flex-shrink: 0;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 0.9rem;
            background: var(--color-surface);
            color: var(--color-primary);
            box-shadow: 0 0.5rem 1.5rem var(--color-shadow);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;
        }

        .iconBox svg {
            font-size: 1.2rem;
        }

        .iconBox:hover {
            transform: translateY(-0.15rem);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
        }

        .titleBlock {
            min-width: 0;
        }

        .title {
            font-size: clamp(1.7rem, 3vw, 2.25rem);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.02em;
            color: var(--color-text-primary);
        }

        .subtitle {
            margin-top: 0.45rem;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--color-text-muted);
        }

        .pillRow {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 0.55rem;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            min-height: 2.15rem;
            padding: 0.45rem 0.7rem;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 0.75rem;
            white-space: nowrap;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;
        }

        .pill svg {
            color: var(--color-primary);
        }

        .pill:hover {
            transform: translateY(-0.1rem);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
        }

        .contentCard {
            padding: 2rem;
            border: 1px solid var(--color-border);
            border-radius: 1rem;
            background: var(--color-surface);
            box-shadow: 0 1rem 2.5rem var(--color-shadow);
        }

        .body {
            max-width: 78ch;
        }

        .body p {
            margin-bottom: 1.15rem;
            font-size: 1rem;
            line-height: 1.8;
            color: var(--color-text-secondary);
        }

        .body p:last-child {
            margin-bottom: 0;
        }

        .metaBar {
            margin-top: 1.75rem;
            padding-top: 1rem;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
        }

        .metaIcon {
            width: 1.8rem;
            height: 1.8rem;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 0.55rem;
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .metaIcon svg {
            font-size: 0.8rem;
        }

        .metaLabel {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--color-text-muted);
        }

        .metaValue {
            padding: 0.45rem 0.65rem;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.72rem;
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            padding-top: 1.5rem;

            .headerRow {
                flex-direction: column;
                align-items: stretch;
            }

            .pillRow {
                justify-content: flex-start;
            }
        }

        @media (max-width: 640px) {
            padding-top: 1.25rem;

            .titleSection {
                align-items: flex-start;
            }

            .iconBox {
                width: 2.7rem;
                height: 2.7rem;
            }

            .contentCard {
                padding: 1.25rem;
                border-radius: 0.85rem;
            }

            .body p {
                font-size: 0.95rem;
                line-height: 1.75;
            }

            .metaBar {
                align-items: flex-start;
                flex-direction: column;
            }

            .metaValue {
                max-width: 100%;
                white-space: normal;
            }
        }
    `,
};
