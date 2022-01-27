import styled from 'styled-components';

export const Content = styled.div`
    font-family: sans-serif;
    margin-top: 2rem;

    a {
        display: block;
        margin-top: 2rem;
        text-decoration: none;
        color: orange;

        span {
            color: #010101;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;
