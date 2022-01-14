import React from 'react';
import FooterWrapper, { FooterTitleWrapper, Title, Text, Image, FooterMediumWrapper,
    TextOpacity, FooterLowerWrapper, FooterLogoWrapper, Logo, FooterTextOpacityWrapper,
    FooterContentWrapper, TextSpan, Link } from './Footer.style';

const Footer = () => {
    return (
        <FooterWrapper>

           <FooterTitleWrapper>
               <Title>MarsHighTech@gmail.com</Title>
           </FooterTitleWrapper>

            <FooterMediumWrapper>

                <FooterContentWrapper>
                    <Image src={"./static/images/Pin.png"}/>
                    <Text>102 cours Franklin Roosvelt 33000 Bordeaux</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    <Image src={"./static/images/Phone.png"}/>
                    <Text>+33.7.35.55.74.32</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    <Image src={"./static/images/User.png"}/>
                    <Text>Lorem autem uptimus prime de el famoso dif</Text>
                </FooterContentWrapper>

            </FooterMediumWrapper>

            <FooterLowerWrapper>

                <FooterTextOpacityWrapper>
                    <TextOpacity><TextSpan>©</TextSpan>All Right reserved</TextOpacity>
                </FooterTextOpacityWrapper>

                <FooterLogoWrapper>
                    <Link href={"#"}>
                        <Logo src={"./static/images/Facebook.png"}/>
                    </Link>
                    <Link href={"#"}>
                        <Logo src={"./static/images/Twitter.png"}/>
                    </Link>
                    <Link href={"#"}>
                        <Logo src={"./static/images/Instagram.png"}/>
                    </Link>
                    <Link href={"#"}>
                        <Logo src={"./static/images/Twitch.png"}/>
                    </Link>
                </FooterLogoWrapper>

            </FooterLowerWrapper>

        </FooterWrapper>
    )
}

export default Footer


