import dynamic from 'next/dynamic';
import React from 'react';
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import LayoutProvider from '../../context/LayoutProvider';

const Header = dynamic(() => import('../Layout/Header/Header'));
const Footer = dynamic(() => import('../Layout/Footer/Footer'));

const { Content } = Layout;

const LayoutPage = ({ children, user, isLoggedIn }) => {

    const router = useRouter();
    const { locale } = router;
    if (typeof user === 'string') user = JSON.parse(user);

    return (
        <Layout>
            <LayoutProvider>
                
            </LayoutProvider>
        </Layout>
    )
}

export default LayoutPage
