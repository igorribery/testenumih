import styled from "styled-components";

export const Container = styled.div``;

export const PageAction = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    text-align: center;

   p {
        margin: 0 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
   }
`;

export const ButtonPrev = styled.button<{prev: boolean}>`
        font-size: 15px;
        margin: 0 10px;
        padding: 10px;
        cursor: ${props => props.prev ? 'normal' : 'pointer'};
        border: none;
        background: transparent;
        width: 90px;
        color: ${props => props.prev ? '#484F58' : '#FFF'};
        
        
        &:hover {
            border-radius: ${props => props.prev ? '0px' : '10px'};
            border: ${props => props.prev ? 'none' : '1px solid #c0c0c0'};
            
        }
`;

export const ButtonNext = styled.button<{next: boolean}>` 
        font-size: 15px;
        margin: 0 10px;
        padding: 10px;
        cursor: ${props => props.next ? 'normal' : 'pointer'};
        border: none;
        background: transparent;
        width: 90px;
        color: ${props => props.next ? '#484F58' : '#FFF'};
        
        
        &:hover {
            border-radius: ${props => props.next ? '0px' : '10px'};
            border: ${props => props.next ? 'none' : '1px solid #c0c0c0'};
            
        }
`;