import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const AuthNav = () => {
    
    return (
        <div style={{ display: 'flex' }}>
            <NavLink to="login" >
                <Button variant="contained">log in</Button>
            </NavLink>
            
            <NavLink to="register" >
                <Button variant="outlined" sx={{ ml: 1, }}>Sign up</Button>
            </NavLink>
        </div>);
};

export default AuthNav;