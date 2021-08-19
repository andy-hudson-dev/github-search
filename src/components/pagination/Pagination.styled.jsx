import styled from "styled-components";

const PaginationStyled = styled.div`
    margin-top: 2rem;

    .pagination {
        color: ${(props) => props.theme.secondaryText};
        background-color: ${(props) => props.theme.secondaryBg};
        border: .1rem solid ${(props) => props.theme.secondaryBg};

        &--current {
            color: ${(props) => props.theme.tertiaryText};
            background-color: ${(props) => props.theme.tertiaryBg};
            border: .1rem solid ${(props) => props.theme.tertiaryBg};
        }
    }
`;

export default PaginationStyled;