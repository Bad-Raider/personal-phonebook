import css from './SharedLayout.module.css'
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout  = () => {
    return (
        <>
            <header className={css.header}>
                <NavLink to="login" className={css.btnNav} >login</NavLink>
                <NavLink to="register" className={css.btnNav}>Register</NavLink>
                <NavLink to="contacts" className={css.btnNav}>contacts</NavLink>
            </header>
            <main>{<Outlet/>}</main>
        </>
    );
};

export default SharedLayout;