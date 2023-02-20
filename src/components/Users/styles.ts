import styled from "styled-components";

export const Container = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
        text-align: center;
        
    }

    img {
        height: 140px;
        width: 140px;
        border: 4px solid #644AFF;
        border-radius: 50%;
    }

    button {
        padding: 15px;
        width: 200px;
        background-color: #644AFF;
        cursor: pointer;
        border-radius: 10px;
        color: #FFF;
        border: none;
        font-size: 1rem;
    }
`;
export const Location = styled.div`
    display: flex;
    align-items: center;

    p {
        display: flex;
        align-items: center;
    }

    span {
        margin-left: 5px;
        color: #9DA5D1;
        
    }
    svg {
        fill: #FF4040;
        font-size: 25px;
    }
`;

export const InfoArea = styled.div`
    padding: 10px;
    display: flex;
    
    h4 {
        font-weight: bold;
    }

    p {
        margin-top: 5px;
    }
`;

export const Followers = styled.div`
    margin: 10px;
  
`;

export const Following = styled.div`
    margin: 10px;
`;