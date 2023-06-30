import css from './Header.module.css'
import { NavLink, Outlet } from "react-router-dom";
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';

const Header  = () => {
    const { auth } = useSelector(state => state);

    return (
        <div className={css.container}>
            <header>
                <nav className={css.navigations}>
                    <NavLink to="/" className={css.btnNav} >Home</NavLink>

                    {auth.isLoggedIn
                        ? <NavLink to="contacts" className={css.btnNav}>contacts</NavLink>
                        : <AuthNav></AuthNav>}
                </nav>
                {auth.isLoggedIn && <UserMenu />}
            </header>
            <main>{<Outlet />}</main>
        </div>
    )
};

export default Header;