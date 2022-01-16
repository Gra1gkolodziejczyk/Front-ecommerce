import React from 'react';
import { useRouter } from 'next/router';

import NavbarWrapper, {
    LogoArea,
    MenuArea,
    AvatarWrapper,
    AuthWrapper,
    MenuWrapper
} from './Navbar.style'
//import Image from 'next/image';

export const Navbar = ({
    className,
    logo,
    avatar,
    user,
    navMenu,
    authMenu,
    profileMenu,
    isLogin,
    headerType,
    location,
}) => {

    const addAllClasses = ['navbar'];
    // const router = useRouter();

    if (className) {
        addAllClasses.push(className);
    }

    if (headerType) {
        addAllClasses.push(`is_${headerType}`);
    }

    return (
        <NavbarWrapper className={addAllClasses.join(" ")}>
            {logo ? (
                <LogoArea>
                    {logo}
                </LogoArea>
            ) : null}
            <MenuArea>
                {location.pathname === "/dashboard"
                ? null :
                    navMenu && <MenuWrapper className='main_menu'>{navMenu}</MenuWrapper>
                }
                {isLogin && avatar ? (
                    <AvatarWrapper>{profileMenu}</AvatarWrapper>
                ) : (
                    authMenu && (
                        <AuthWrapper className='auth_menu'>{authMenu}</AuthWrapper>
                    )
                )}
            </MenuArea>
        </NavbarWrapper>
    )
}

export default Navbar