import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useNavigate } from "react-router-dom";
import { Chip } from '@mui/material';


const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(state => state);
    
    const handleClick = () => {
        dispatch(logOut())
        navigate("/")
    };

    return (
        <div className={css.wraperUserMenu}>
            <Chip label={auth.user.email } onClick={handleClick} />
        </div>
    );
 };

export default UserMenu;