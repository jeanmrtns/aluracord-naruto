import styled from 'styled-components';

export const Container = styled.main`
    margin: 0 auto;
    min-height: 100vh;    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.form`
    background-color: #fff;
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.25rem;
    width: 90%;
    height: 90vh;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: flex-start;
    width: 100%;

    a {
        color: orange;
    }
`;

export const Chat = styled.div`
    background-color: #e7e7e3;
    height: 100%;
    width: 100%;
    padding: 2rem;

    overflow: scroll;
`;

export const Message = styled.div`
    font-family: sans-serif;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    :not(:first-of-type) {
        margin-top: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 0.25rem;

        img {
            border-radius: 50%;
        }
        
        h4 {
            margin-inline: 1rem;
        }

        time {
            font-size: 0.5rem;
            font-weight: bold;
            color: #aaa;
        }
    }

    p {
      display: flex;
        width: 100%;
        justify-content: space-between;

        button {
            align-self: flex-start;
            padding: 0.25rem;
            min-width: 4rem;
            border-radius: 0.25rem;
            cursor: pointer;
            border: 0;
            background-color: orange;
            color: #FFF;
            height: 3rem;
            margin-left: 1rem;
        }
    }

    &:hover {
        background-color: #FFF;
        border-radius: 0.25rem;
    }

`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;

    button {
        height: 100%;
        border: 1px solid orange;
        background-color: inherit;
        padding: 0 2rem;
        cursor: pointer;
        border-left: none;

        &:hover {
            background-color: orange;
            color: #fff;
        }
    }
`;

export const NewMessageInput = styled.input`
    display: block;
    width: 100%;
    padding: 1rem 1.25rem;
    
    border: 1px solid orange;
    outline-color: orangered;
    font-size: 1rem;
`;
