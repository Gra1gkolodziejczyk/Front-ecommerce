import { useRouter } from "next/router";
import { Menu } from 'antd';
import ActiveLink from '../../../helpers/activeLink';
import useTranslation from '../../../hooks/useTranslation';

const AuthMenu = ({ className }) => {

    const router = useRouter();
    const { locale } = router;

    return (
        <Menu className={className}>
            <Menu.Item key="0">
                <ActiveLink href="/login">
                    Login
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="1">
                <ActiveLink href="/register">
                    Register
                </ActiveLink>
            </Menu.Item>
        </Menu>
    )
}

export default AuthMenu;