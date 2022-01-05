import React, { useContext } from 'react';
import { Divider, Collapse, Button, Menu } from 'antd';
import ActiveLink from '../../../helpers/activeLink';
import { AuthContext } from '../../../context/AuthProvider';
import useTranslation from '../../../hooks/useTranslation';

const MobileMenu = ({ className, espace, switchEspace, user, onClose, hostMode = null }) => {
    const { loggedIn, logOut } = useContext(AuthContext);

    const { Panel } = Collapse;
    const { t } = useTranslation();

    return (
        <Menu className={className}>
            <Menu.Item onClick={onClose}>
                Accueil
            </Menu.Item>
            {loggedIn ? (
                <Collapse> {/* Cette balise permet de renfermer 
                            le dropdown du menu je te laisse admirer sur le rendu dans ton navigateur */}
                    <Panel header="Dashboard"> {/* cette balise renferme de Menu Item comme tu le souhaitais pour la navbar */}
                        <Menu.Item onClick={onClose}>
                            <ActiveLink>
                                Mes locations
                            </ActiveLink>
                        </Menu.Item>
                        <Menu.Item onClick={onClose}>
                            <ActiveLink href="/dashboard/purchases">
                                Mes achats
                            </ActiveLink>
                        </Menu.Item>
                        <Menu.Item onClick={onClose}>
                            <ActiveLink href="/products">
                                Les produits
                            </ActiveLink>
                        </Menu.Item>
                    </Panel>
                </Collapse>
            ): null}
        </Menu>
    )
}

export default MobileMenu
