import React from 'react';
import Image from 'next/image';
import FooterWrapper, { FooterTitleWrapper, Title, Text, FooterMediumWrapper,
    TextOpacity, FooterLowerWrapper, FooterLogoWrapper, Logo, FooterTextOpacityWrapper,
    FooterContentWrapper } from './Footer.style';
import LogoImage from '../../../public/images/Logo.jpg';
import FaceBookPic from '../../../public/images/social_facebook_fb_35.png';
import TwitchPic from '../../../public/images/twitch_black_logo_icon_147063.svg';
import InstaPic from '../../../public/images/social_instagram_3.png';

const Footer = () => {
    return (
        <FooterWrapper>
           <FooterTitleWrapper>
               <Title>MarsHighTech@gmail.com</Title>
           </FooterTitleWrapper>

            <FooterMediumWrapper>

                <FooterContentWrapper>
                    <Image src={LogoImage} height={100} width={100} />
                    <Text>102 cours Franklin Roosvelt 33000 Bordeaux</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    {/* <Image src={""}/> */}
                    <Text>+33.7.35.55.74.32</Text>
                </FooterContentWrapper>

                <FooterContentWrapper>
                    {/* <Image src={""}/> */}
                    <Text>Lorem autem uptimus prime de el famoso dif</Text>
                </FooterContentWrapper>

            </FooterMediumWrapper>

            <FooterLowerWrapper>

                <FooterTextOpacityWrapper>
                    <TextOpacity>©All Right reserved</TextOpacity>
                </FooterTextOpacityWrapper>

                <FooterLogoWrapper>
                    <Image src={InstaPic} width={100} height={100}/>
                    <Image src={TwitchPic} width={100} height={100}/>
                    <Image src={FaceBookPic} width={100} height={100}/>
                    <Logo src={""}/>
                </FooterLogoWrapper>

            </FooterLowerWrapper>
        </FooterWrapper>
    )
}

export default Footer


