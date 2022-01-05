import { useRouter, withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Menu, Select } from 'antd';
import Flags from 'country-flag-icons/react/3x2';
import ActiveLink from '../../../helpers/activeLink';
import useTranslation from '../../../hooks/useTranslation';
import { LanguageSelectWrapper } from './MainMenu.style';

const MainMenu = ({ className, isLoggedIn }) => {

    // aide toi également de la documentation de antd elle te sera très utile

    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const { Option } = Select;
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        setLanguage(locale);
    }, [])

    const handleChangeLocale = key => {
        // cette fonction est la pour recharger pour rester sur la même page quand tu change
        // la langue du site
        router.push(router.asPath, router.asPath, { locale: key });
        setLanguage(key);
    }

    return (
        <Menu className={className}>
            <Menu.Item key="0">
                <LanguageSelectWrapper>
                    <Select className='language_select' defaultValue={locale} onChange={handleChangeLocale} style={{ width: 150 }}>
                        <Option key={'fr'}><Flags.FR style={{ width: "20px", marginRight: "10px" }} />Français</Option>
                        <Option key={'en'}><Flags.GB style={{ width: "20px", marginRight: "10px" }} />English</Option>
                    </Select>
                </LanguageSelectWrapper>
            </Menu.Item>
            <Menu.Item key="1">
                <ActiveLink href="/">
                    A propos
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="2">
                <ActiveLink href="/">
                    Store
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="3">
                <ActiveLink href="/">
                    Un lien
                    {/* Tu met les titres que tu veux */}
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="4">
                <ActiveLink href="/">
                    Un lien
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="5">
                <ActiveLink href="/">
                    Contact
                </ActiveLink>
            </Menu.Item>
        </Menu>
    )
}

export default withRouter(MainMenu)
