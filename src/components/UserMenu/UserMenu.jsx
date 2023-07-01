import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useNavigate } from "react-router-dom";


const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(state => state);
    

    return (
        <div className={css.wraperUserMenu}>
            <p>{auth.user.email }</p>
            <button
                type="button"
                className={css.btnLog}
                onClick={() => {
                    dispatch(logOut())
                    navigate("/")
                }}
            >Logout</button>
        </div>
    );
 };

export default UserMenu;