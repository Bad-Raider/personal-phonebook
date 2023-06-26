import css from './SharedLayout.module.css'
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout  = () => {
    return (
        <>
            <header className={css.header}>
                <NavLink to="login">
                    <button type='button'>login</button>
                </NavLink>
                <NavLink to="register">
                    <button type='button'>register</button>
                </NavLink>
                <NavLink to="contacts">
                    <button type='button'>contacts </button>
                </NavLink>
            </header>
            <main>{<Outlet/>}</main>
        </>
    );
};

export default SharedLayout;