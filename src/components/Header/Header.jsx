import css from './Header.module.css'
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const Header  = () => {
    const { auth } = useSelector(state => state);

    return (
        <div className={css.container}>
            <header
            >
                <nav className={css.navigations}><NavLink to="login" className={css.btnNav} >login</NavLink>
                    <NavLink to="register"
                        className={css.btnNav}
                        activeClassName={css.active}>Register</NavLink>
                    <NavLink to="contacts" className={css.btnNav}>contacts</NavLink></nav>
                
                {auth.isLoggedIn && <UserMenu />}

            </header>
            <main>{<Outlet />}</main>
        </div>
    );
};

export default Header;