import styled from "styled-components";

export const Container = styled.div` 
    min-height: 100vh;
    color: #FFF;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 1280px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const InfoArea = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`;

export const SideBar = styled.div`
    width: 25rem;
    height: 100vh;

    img {
        height: 18rem;
        width: 18rem;
        border-radius: 50%;
        margin-top: 2rem;

        @media (max-width: 768px) {
            height: 10rem;
            width: 10rem;
        }
    }

    h2 {
        margin-top: 10px;
        color: #a3a3a3;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
    p { 
        margin-bottom: 1.2rem;
        color: #CCC;

        @media (max-width: 768px) {
            font-size: 15px;
            margin-top: 10px;
        }
    }
    h4 {
        display: flex;
    }
`;

export const FollowArea = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;   
`;

export const Followers = styled.div`
    display: flex;
    margin: 20px 0;
    cursor: pointer;

    p {
        @media (max-width: 768px) {
            font-size: 13px;
        }
    }

    &:hover {
        font-weight: bold;
    }

    span {
        margin: 0 5px;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 13px;
            display: flex;
            align-items: center;
            margin-bottom: 7px;
        }
    }
`;
export const Following = styled.div`
    display: flex;
    margin: 0 2rem;

    p {
        @media (max-width: 768px) {
            font-size: 13px;
        }
    }

    &:hover {
        font-weight: bold;
    }

    span {
        margin: 0 5px;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 13px;
            display: flex;
            align-items: center;
            margin-bottom: 7px;
        }
    }
`;

export const Page= styled.div`
    flex: 1;
    min-height: 100vh;
    padding-left: 2.5rem;
    padding-top: 2.5rem;

    @media (max-width: 768px) {
        margin: 0;
        padding: 0;
    }
`;

export const OtherInfos = styled.div`
    height: 100px;
    display: block;
`;

export const Location = styled.div`
    
    p {
        font-size: 14px; 
    }

    span {
        margin-left: 5px;
        color: #FFF;
        
    }
    svg {
        fill: gray;
        font-size: 13px;
    }
`;