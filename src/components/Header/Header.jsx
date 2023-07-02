import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import css from './Header.module.css'
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Button from '@mui/material/Button';


const Header  = () => {
    const { auth } = useSelector(state => state);

    return (
        <div className={css.container}>
            <header>
                <nav className={css.navigations}>
                    <NavLink to="/" >
                        <Button variant="contained">Home</Button>
                    </NavLink>

                    {auth.isLoggedIn
                        ? <NavLink to="contacts" >
                            <Button variant="contained" sx={{mr: 1}}>Contacts</Button>
                        </NavLink>
                        : <AuthNav></AuthNav>}
                </nav>
                {auth.isLoggedIn && <UserMenu />}
            </header>
            <main>{<Outlet />}</main>
        </div>
    )
};

export default Header;