import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 1rem 0;
    margin: 1rem 0;
`;

export const InfoLeft = styled.div`
    width: 50%;
    margin: 0;
    padding: 0;

    h1 {
        font-size: 20px;
        color: #58A6FF;
        margin-bottom: 10px;

        @media (max-width: 768px) {
        font-size: 17px;
    }
    }
    span {
        color: #8B949E;
        font-size: 15px;
        font-weight: bold;

        @media (max-width: 768px) {
        font-size: 13px;
    }
    }
    p {
        color: #8B949E;
        margin: 10px 0;
        font-size: 12px; 
        
        @media (max-width: 768px) {
        font-size: 10px;
    }
    }
`;

export const InfoRight = styled.div`
    flex: 1;
    display: grid;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding: 5px;
    margin: 5px;
    
     p {
        font-size: 12px;
        padding: 5px;
        color: #8B949E;
    }
`;