import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useNavigate } from "react-router-dom";
import { Chip } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';


const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(state => state);
    
    const handleClick = () => {
        dispatch(logOut())
        navigate("/")
    };

    return (
        <Chip
            label={auth.user.email}
            onClick={handleClick}
            variant="outlined"
            color="error"
            size="small"
            icon={<FaceIcon />}
        />
    );
 };

export default UserMenu;