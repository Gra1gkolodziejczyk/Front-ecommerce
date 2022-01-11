import styled from "styled-components";

const FooterWrapper = styled.div`
    width: 100%;
    height: 75%;
    background-color: #CCCCCC;
`;

export const FooterTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    color: #fff;
`;

export const FooterMediumWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const FooterContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: column;
`;

export const Image = styled.img`
    width: 120px;
    height: 120px;
`;

export const Text = styled.p`
    font-size: 16px;
    justify-content: center;
`;

export const FooterLowerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterTextOpacityWrapper = styled.div`
    align-items: flex-start;
`;

export const FooterLogoWrapper = styled.div`
     align-items: center;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    display: inline-block;
    align-items: flex-end;
    justify-content: space-around;
`;

export const TextOpacity = styled.p`
    font-size: 12px;
    color: #fff;
`;

export default FooterWrapper