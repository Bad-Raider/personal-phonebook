import css from './Header.module.css'
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from 'components/UserMenu/UserMenu';

const Header  = () => {
    return (
        <div className={css.container}>
            <header
            >
                <nav className={css.navigations}><NavLink to="login" className={css.btnNav} >login</NavLink>
                    <NavLink to="register" className={css.btnNav}>Register</NavLink>
                    <NavLink to="contacts" className={css.btnNav}>contacts</NavLink></nav>
                <UserMenu />

            </header>
            <main>{<Outlet />}</main>
        </div>
    );
};

export default Header;