import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 18rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.85rem;
        padding: 2rem;

        .loaderIcon {
            font-size: 1.6rem;
            animation: rotateLoader 800ms linear infinite;
        }

        .text {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.65);
        }

        @keyframes rotateLoader {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    `,
};
