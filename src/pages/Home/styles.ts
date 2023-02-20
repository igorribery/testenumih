import styled from "styled-components";

export const Container = styled.div`
    
    margin: auto;
    max-height: 100vh;
    max-width: 550px;

    h1 {
        text-align: center;
    }

`;
export const SearchArea = styled.div`
    margin: 1rem 0;
    border-radius: 1rem;
    background-color: #2b3566;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h2 {
        text-align: center;
    } 
    p {
        color: #9da5d1;
        margin: 1rem 0;
    }   
`;

export const Input = styled.div`

    display: flex;
    gap: 0.7rem;

    input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: #000;
    }
    button {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #0E1129;
        border: none;
    }

`;
