import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
// import css from './Header.module.css'
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Wraper, Navigations, Head } from "./styled";

const Header  = () => {
    const { auth } = useSelector(state => state);

    return (
        <>
            <Head>
                <Wraper>
                    <Navigations >
                        <NavLink to="/" >
                            <Button
                                variant="contained"
                                sx={{ pl: 5, pr: 5, }}>
                                <HomeIcon
                                    color="disabled"
                                    sx={{ fill: 'white' }} />
                            </Button>
                        </NavLink>

                        {auth.isLoggedIn
                            ? <NavLink to="contacts" >
                                <Button
                                    variant="contained"
                                    sx={{ ml: 1, mr: 1 }}
                                >Contacts
                                </Button>
                            </NavLink>
                            : <AuthNav></AuthNav>}
                    </Navigations>
                    {auth.isLoggedIn && <UserMenu />}
                </Wraper>
            </Head>
            <main>{<Outlet />}</main>
        </>
    );
};

export default Header;