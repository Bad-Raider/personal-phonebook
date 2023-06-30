import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css'

const AuthNav = () => {
    
        
    return (
        <div className={css.wraperAuthNav}>
            <NavLink to="login" className={css.btnNav} >login</NavLink>   
            <NavLink to="register" className={css.btnNav}>Register</NavLink>
        </div>);  
};

export default AuthNav;