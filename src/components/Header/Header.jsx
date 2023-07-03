import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import css from './Header.module.css'
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


const Header  = () => {
    const { auth } = useSelector(state => state);

    return (
        <div className={css.container}>
            <header>
                <div className={css.wraper}>
                    <nav className={css.navigations}>
                        <NavLink to="/" >
                            <Button variant="contained" sx={{ pl: 5, pr: 5,  }}>
                                <HomeIcon color="disabled" sx={{ fill: 'white' }} />
                            </Button>
                        </NavLink>

                        {auth.isLoggedIn
                            ? <NavLink to="contacts" >
                                <Button variant="contained" sx={{ mr: 1, pl: 5, pr: 5 }}>Contacts</Button>
                            </NavLink>
                            : <AuthNav></AuthNav>}
                    </nav>
                    {auth.isLoggedIn && <UserMenu />}
                </div>
            </header>
            <main>{<Outlet />}</main>
        </div>
    );
};

export default Header;