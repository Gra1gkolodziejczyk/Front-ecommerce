import { Layout } from "antd"
import dynamic from 'next/dynamic';
import { useRouter, withRouter } from "next/router";
import LayoutProvider from "../../context/LayoutProvider";

const Footer = dynamic(() => import('./Footer/Footer'));
const Header = dynamic(() => import('./Header/Header'));

const { Content } = Layout;

const LayoutWrapper = ({ children, user, isLoggedIn }) => {
    if (typeof user === 'string') user = JSON.parse(user);

    const router = useRouter();

    return (
        <Layout>
            <LayoutProvider>
                {router.pathname === '/' ||
                router.pathname === '/configurator' ||
                router.pathname === '/products' ||
                router.pathname === '/products/[id]' ||
                router.pathname === '/dashboard' ||
                router.pathname === '/login' ||
                router.pathname === '/registration' ? (
                    <>
                        <Header user={user} isLoggedIn={isLoggedIn} />
                        <Content>{children}</Content>
                        {router.pathname === '/' ||
                        router.pathname === '/dashboard' 
                        
                    ? (<Footer />)
                    : null}
                    </>
                ) : (
                    <>
                        <Content>{children}</Content>
                        {router.pathname.split("/")[1] == "dashboard" ? <Footer /> : null}
                    </>
                )}
            </LayoutProvider>
        </Layout>
    )
}

export default withRouter(LayoutWrapper)
