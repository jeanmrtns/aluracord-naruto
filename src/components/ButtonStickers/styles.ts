import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
`;

export const Button = styled.button``;
export const Modal = styled.div`
    position: absolute;
    top: -25rem;
    right: 7rem;
    border: 1px solid orange;
    background-color: #FFF;

    max-width: 30rem;
    max-height: 30rem;
    display: grid;
    gap: 2rem;
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
    overflow: scroll;

    img {
        height: 5rem;
        width: 5rem;
        cursor: pointer;
    }

    @media screen and (max-width: 780px) {
        top: -30rem;
        right: -5rem;
    }
`;
