import { useRouter, withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useTranslation from '../../../hooks/useTranslation';

const MainMenu = ({ className, isLoggedIn }) => {

    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div>
                <span></span>   
                <span></span>   
                <span></span>
            </div>
            { visible ?  
                <div>

                </div> 
            : null}  
        </>
    )
}

export default withRouter(MainMenu)
