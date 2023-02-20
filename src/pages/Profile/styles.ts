import styled from "styled-components";

export const Container = styled.div`
`;

export const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #383a42;

    @media (max-width: 768px) {
        height: 7rem;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

`;
export const Search = styled.div`
    width: 50%;
    margin: 0;
`;

export const Input = styled.input`
    border: none;
    padding: 9px;
    border-radius: 10px;
    width: 100%;
    color: #fff;
    background-color: #2b3566;

    @media (max-width: 768px) {
        width: 90%;
        padding: 9px;
    }
`;

export const SelectArea = styled.div`
    margin-left: 1rem;

    @media (max-width: 768px) {
        margin: 0px 10px;
        margin-left: 1rem;
    }

    label {
        font-size: 18px;
        color: #C9D1D9;

        @media (max-width: 768px) {
        font-size: 13px;
        display: flex;
        margin-bottom: 5px;
    }
    }
`; 

export const Select = styled.select`
    border-radius: 10px;
    border: none;
    color: #FFF;
    padding: 0.5rem;
    width: 120px;
    height: 35px;
    margin: 10px;
    background-color: #1c1f2e;

    @media (max-width: 768px) {
        height: 35px;
        width: 100%;
        margin: 0;
        margin-bottom: 1.4rem;
        margin-right: 2rem;
        padding: 0;
        text-align: center;
    }
`; 

