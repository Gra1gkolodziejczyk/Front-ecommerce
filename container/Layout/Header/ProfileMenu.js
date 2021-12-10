import React, { useState, useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import ActiveLink from '../../../helpers/activeLink';
import { AuthContext } from '../../../context/AuthProvider';
import PatchAPIData from '../../../helpers/patch_api_data';
import useTranslation from '../../../hooks/useTranslation';
import { setCookie } from '../../../helpers/session';


const ProfileMenu = ({ user }) => {

    const { t } = useTranslation();
    const { logOut } = useContext(AuthContext);
    const [state, setState] = useState(false);
    const router = useRouter();
    const { locale } = router;

    const handleDropdown = () => {
        setState(!state);
    }

    const closeDropdown = () => {
        setState(false);
    }

    const dropdownRef = useRef(null);
    useOnClickOutside(dropdownRef, () => setState(false));



    return (
        <div className='avatar-dropdown' ref={dropdownRef}>
            <div className='dropdown-handler' onClick={handleDropdown}>
                {/* Ici rentrera l'image du user dans une icon */}
            </div>
            <Menu>
                <Menu.Item>
                    <ActiveLink>
                        {/* Ca ce sont les différents liens quand le user est connecté 
                        il peut voir son avatar et cliquer dessus 
                        et fera apparaitre ce menu après tu le réarrange comme tu le souhaite*/}
                        Le nom du lien
                    </ActiveLink>
                </Menu.Item>
                <Menu.Item>
                    <ActiveLink href="/">
                        Le nom du lien
                    </ActiveLink>
                </Menu.Item>
                <Menu.Item>
                    <ActiveLink href="/">
                        Le nom du lien
                    </ActiveLink>
                </Menu.Item>
                <Menu.Item>
                    <ActiveLink href="/">
                        Le nom du lien
                    </ActiveLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default ProfileMenu
