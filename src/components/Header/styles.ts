import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #16195C;
    width: 100%;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 100%;

    svg {
        margin: 0 15px;
        font-size: 35px;
        margin-top: 10px;
        cursor: pointer;
    }
`;


export const Input = styled.input`
    margin: 0;
    width: 30%;
    margin-right: 1rem;
    margin-top: 10px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: #FFF;
    background-color: #1c1f2e;

    @media (max-width: 768px) {
        width: 50%;
        padding: 7px;
    }


`;

export const Infos = styled.div`
    display: flex;
    margin: 0;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        
    }
    
`;

export const Repo = styled.p<{$page: boolean}>`
    cursor: pointer;
    padding: 10px;
    border-bottom: 2px solid ${props => props.$page ? "#25CD89" : 'none'};
    font-weight: ${props => props.$page ? 'bold' : 'none'};

    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:hover {
        font-weight: bold;
    } 
    span {
        font-size: 12px;
        background-color: #090d2e;
        font-weight: bold;
        border-radius: 50%;
        margin: 0 5px;
        padding: 6px;

        @media (max-width: 768px) {
        font-size: 10px;
    }
    }
`;

export const Followers = styled.p<{$page: boolean}>`
    cursor: pointer;
    padding: 10px;
    border-bottom: 2px solid ${props => props.$page ? "#25CD89" : 'none'};
    font-weight: ${props => props.$page ? 'bold' : 'none'};

    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:hover {   
        font-weight: bold;
    }
    span {
        font-size: 12px;
        background-color: #090d2e;
        font-weight: bold;
        border-radius: 50%;
        margin: 0 5px;
        padding: 6px;

        @media (max-width: 768px) {
        font-size: 10px;
    }
    }
`;

export const Following = styled.p<{$page: boolean}>`
    cursor: pointer;
    padding: 10px;
    border-bottom: 2px solid ${props => props.$page ? "#25CD89" : 'none'};
    font-weight: ${props => props.$page ? 'bold' : 'none'};

    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:hover {  
        font-weight: bold;
    }
    span {
        font-size: 12px;
        background-color: #090d2e;
        font-weight: bold;
        border-radius: 50%;
        margin: 0 5px;
        padding: 6px;

        @media (max-width: 768px) {
        font-size: 10px;
    }
    }
`;