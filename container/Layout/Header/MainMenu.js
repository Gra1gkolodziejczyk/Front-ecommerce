import { useRouter, withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useTranslation from '../../../hooks/useTranslation';
import BurgerMenu, { BurgerMenuItem, TopSpan, MidSpan, BotSpan} from './MainMenu.style';

const MainMenu = ({ className, isLoggedIn }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const [language, setLanguage] = useState(null);
    const [visible, setVisible] = useState(false)

    return (
        <BurgerMenu>
            <BurgerMenuItem onClick={setVisible}>
                <TopSpan></TopSpan>
                <MidSpan></MidSpan>
                <BotSpan></BotSpan>
            </BurgerMenuItem>
            { visible ?
                <>

                </>
            : null }
        </BurgerMenu>
    )
}

export default withRouter(MainMenu);
