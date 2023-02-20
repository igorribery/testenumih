import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem; 
    display: flex;
    justify-content: flex-start;
`;

export const AvatarContainer = styled.div`
    margin: 0;
    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;

        @media (max-width: 768px) {
            height: 40px;
            width: 40px;
        }
    }
   
`;

export const InfoContainer = styled.div`
    margin: 15px;
    h1 {
        font-size: 16px;
        color: #C9D1D9;
        
        @media (max-width: 768px) {
            font-size: 13px;
        }
    }

`; 