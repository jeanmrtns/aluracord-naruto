import styled from 'styled-components';

export const Container = styled.main`
    margin: 0 auto;
    min-height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.section`
    max-height: 40%;
    background-color: #fff;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
`;

export const Form = styled.form`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 1.25rem;
    }

    h3 {
        font-size: 0.75rem;
        margin-top: 1rem;
    }

    button, input {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 0.25rem;
        border: 0;
    }

    input {
        margin-top: 2rem;
        border: 1px solid orange;
        outline-color: orangered;
    }

    button {
        margin-top: 1rem;
        background-color: orange;
        color: #fff;
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter: opacity(0.9);
        }

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

`;

export const GitHubAvatar = styled.figure`
    padding: 1rem 5rem;
    background-color: #fee;
    border: 1px solid orange;
    border-radius: 0.25rem;
    margin-left: 10rem;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 720px) {
        display: none;
    }

    img {
        min-height: 100%;
        border-radius: 50%;
    }

    span {
        font-size: 0.75rem;
        display: block;
        margin-top: 2rem;
        background: #010101;
        color: #fff;
        padding: 0.5rem;
        border-radius: 0.75rem;
    }
`;
