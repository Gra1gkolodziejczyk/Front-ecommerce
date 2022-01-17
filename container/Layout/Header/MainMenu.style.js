import styled from "styled-components";

const BurgerMenu = styled.div`
    
`;

export const BurgerMenuItem = styled.div`
     width: 42px;
     height: 24px;
     background-color: black;
     cursor: pointer;
     position: relative;
`;

export const TopSpan = styled.span`
    width: 60%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 0%;
    transform: translateY(-50%);
    border-radius: 4px
`;

export const MidSpan = styled.span`
    width: 52%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 40%;
    border-radius: 4px;
`;

export const BotSpan = styled.span`
    width: 60%;
    height: 1px;
    background-color: white;
    position: absolute;
    transform: translateY(-50%);
    border-radius: 4px;
    top: 100%;
`;

export default BurgerMenu