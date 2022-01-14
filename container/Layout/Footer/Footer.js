import React from 'react';
import FooterWrapper, { FooterTitleWrapper, Title, Text, Image, FooterMediumWrapper,
    TextOpacity, FooterLowerWrapper, FooterLogoWrapper, Logo, FooterTextOpacityWrapper,
    FooterContentWrapper, TextSpan } from './Footer.style';

const Footer = () => {
    return (
        <FooterWrapper>

           <FooterTitleWrapper>
               <Title>MarsHighTech@gmail.com</Title>
           </FooterTitleWrapper>

            <FooterMediumWrapper>

                <FooterContentWrapper>
                    <Image src={""}/>
                    <Text>102 cours Franklin Roosvelt 33000 Bordeaux</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    <Image src={""}/>
                    <Text>+33.7.35.55.74.32</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    <Image src={""}/>
                    <Text>Lorem autem uptimus prime de el famoso dif</Text>
                </FooterContentWrapper>

            </FooterMediumWrapper>

            <FooterLowerWrapper>

                <FooterTextOpacityWrapper>
                    <TextOpacity><TextSpan>©</TextSpan>All Right reserved</TextOpacity>
                </FooterTextOpacityWrapper>

                <FooterLogoWrapper>
                    <Logo src={"./static/images/Facebook.png"}/>
                    <Logo src={"./static/images/Twitter.png"}/>
                    <Logo src={"./static/images/Instagram.png"}/>
                    <Logo src={"./static/images/Twitch.png"}/>
                </FooterLogoWrapper>

            </FooterLowerWrapper>

        </FooterWrapper>
    )
}

export default Footer


