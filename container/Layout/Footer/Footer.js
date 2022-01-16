import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWrapper, { FooterTitleWrapper, Title, Text, FooterMediumWrapper,
    TextOpacity, FooterLowerWrapper, FooterLogoWrapper, FooterTextOpacityWrapper,
    FooterContentWrapper, TextSpan } from './Footer.style';
import PinPic from '../../../public/images/Pin.png';
import PhonePic from '../../../public/images/Phone.png';
import UserPic from '../../../public/images/User.png';
import InstagramPic from '../../../public/images/Instagram.png';
import FacebookPic from '../../../public/images/Facebook.png';
import TwitterPic from '../../../public/images/Twitter.png';
import TwitchPic from '../../../public/images/Twitch.png';
import YoutubePic from '../../../public/images/Youtube.png';

const Footer = () => {
    return (
        <FooterWrapper>
           <FooterTitleWrapper>
               <Title>MarsHighTech@gmail.com</Title>
           </FooterTitleWrapper>
            <FooterMediumWrapper>
                <FooterContentWrapper>
                    <Image src={PinPic} width={100} height={100}/>
                    <Text>102 cours Franklin Roosvelt 33000 Bordeaux</Text>
                </FooterContentWrapper>
                <FooterContentWrapper>
                    <Image src={PhonePic} width={100} height={100}/>
                    <Text>+33.7.35.55.74.32</Text>
                </FooterContentWrapper>
                <FooterContentWrapper>
                    <Image src={UserPic} width={100} height={100}/>
                    <Text>Lorem autem uptimus prime de el famoso dif</Text>
                </FooterContentWrapper>
            </FooterMediumWrapper>
            <FooterLowerWrapper>
                <FooterTextOpacityWrapper>
                    <TextOpacity><TextSpan>©</TextSpan>All Right reserved</TextOpacity>
                </FooterTextOpacityWrapper>
                <FooterLogoWrapper>
                    <Link href={"#"}>
                        <Image src={FacebookPic} width={50} height={50}/>
                    </Link>
                    <Link href={"#"}>
                        <Image src={TwitterPic} width={50} height={50}/>
                    </Link>
                    <Link href={"#"}>
                        <Image src={InstagramPic} width={50} height={50}/>
                    </Link>
                    <Link href={"#"}>
                        <Image src={TwitchPic} width={50} height={50}/>
                    </Link>
                </FooterLogoWrapper>
            </FooterLowerWrapper>
        </FooterWrapper>
    )
}

export default Footer


