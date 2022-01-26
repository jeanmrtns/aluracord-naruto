import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    padding: 10rem 5rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    h1 {
        margin-bottom: 2rem;
        
        span {
            color: #f00;
        }
    }

    a {
        margin-top: 2rem;
        color: orange;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
