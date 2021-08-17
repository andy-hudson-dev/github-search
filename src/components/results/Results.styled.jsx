import styled from "styled-components";

const ResultsStyled = styled.div`
    display:flex;

    ul {
        list-style: none;
    }

    .result {
        display: flex;
        align-items: center;
        padding: 1rem;
        min-width: 400px;
        border-bottom: 1px solid #dadada;

        &__avatar {
            flex-shrink: 0;

            img {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                margin-right: 1rem;
            }
        }

        &__main {
            flex: auto;

            &--header {
                display: flex;
                align-items: center;

                p {
                    margin-left: 1rem;
                }
            }

            &--details {
                font-size: .7rem;

                span {
                    margin: 0 .5rem;
                }
            }
        }
    }
`;

export default ResultsStyled;