import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import FooterWrapper, { FooterTitleWrapper, Title, Text, FooterMediumWrapper,
    TextOpacity, FooterLowerWrapper, FooterLogoWrapper, Logo, FooterTextOpacityWrapper,
    FooterContentWrapper } from './Footer.style';
import LogoImage from '../../../public/images/Logo.jpg';
import FaceBookPic from '../../../public/images/social_facebook_fb_35.png';
import TwitchPic from '../../../public/images/twitch_black_logo_icon_147063.svg';
import InstaPic from '../../../public/images/social_instagram_3.png';
=======
import FooterWrapper, { FooterTitleWrapper, Title, Text, FooterMediumWrapper, TextOpacity,
      FooterLowerWrapper, FooterLogoWrapper, FooterTextOpacityWrapper,
    FooterContentWrapper, TextSpan, Link } from './Footer.style';
import Image from 'next/image';
import PhonePic from '../../../public/images/Phone.png';
import PinPic from '../../../public/images/Pin.png';
import UserPic from '../../../public/images/User.png';
import FacebookPic from '../../../public/images/Facebook.png';
import TwitterPic from '../../../public/images/Twitter.png';
import TwitchPic from '../../../public/images/Twitch.png';
import YoutubePic from '../../../public/images/Youtube.png';
import InstagramPic from '../../../public/images/Instagram.png';
>>>>>>> cea8a323ac5b041c3b90bf668ba3e8f5a1b4b9d5

const Footer = () => {
    return (
        <FooterWrapper>
           <FooterTitleWrapper>
               <Title>MarsHighTech@gmail.com</Title>
           </FooterTitleWrapper>
            <FooterMediumWrapper>
                <FooterContentWrapper>
<<<<<<< HEAD
                    <Image src={LogoImage} height={100} width={100} />
=======
                    <Image src={PinPic} width={100} height={100}/>
>>>>>>> cea8a323ac5b041c3b90bf668ba3e8f5a1b4b9d5
                    <Text>102 cours Franklin Roosvelt 33000 Bordeaux</Text>
                </FooterContentWrapper>
                <FooterContentWrapper>
<<<<<<< HEAD
                    {/* <Image src={""}/> */}
=======
                    <Image src={PhonePic} width={100} height={100}/>
>>>>>>> cea8a323ac5b041c3b90bf668ba3e8f5a1b4b9d5
                    <Text>+33.7.35.55.74.32</Text>
                </FooterContentWrapper>
                <FooterContentWrapper>
<<<<<<< HEAD
                    {/* <Image src={""}/> */}
=======
                    <Image src={UserPic} width={100} height={100}/>
>>>>>>> cea8a323ac5b041c3b90bf668ba3e8f5a1b4b9d5
                    <Text>Lorem autem uptimus prime de el famoso dif</Text>
                </FooterContentWrapper>
            </FooterMediumWrapper>
            <FooterLowerWrapper>
                <FooterTextOpacityWrapper>
                    <TextOpacity><TextSpan>©</TextSpan>All Right reserved</TextOpacity>
                </FooterTextOpacityWrapper>
                <FooterLogoWrapper>
<<<<<<< HEAD
                    <Image src={InstaPic} width={100} height={100}/>
                    <Image src={TwitchPic} width={100} height={100}/>
                    <Image src={FaceBookPic} width={100} height={100}/>
                    <Logo src={""}/>
=======
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
>>>>>>> cea8a323ac5b041c3b90bf668ba3e8f5a1b4b9d5
                </FooterLogoWrapper>
            </FooterLowerWrapper>
        </FooterWrapper>
    )
}

export default Footer


