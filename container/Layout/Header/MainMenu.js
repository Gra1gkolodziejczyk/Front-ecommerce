import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Menu, Select } from 'antd';
import useTranslation from '../../../hooks/useTranslation';

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
            <Menu.Item>
                
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu
