import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useNavigate } from "react-router-dom";
import { Chip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(state => state);
    
    const handleClick = () => {
        dispatch(logOut())
        navigate("/")
    };

    return (
       
            <>
            <Chip
                avatar={<LogoutIcon/>}
                label={auth.user.email}
                onClick={handleClick}
                sx={{p: 3, fontSize: 17}}
            />
            
        </>
    
    );
 };

export default UserMenu;