import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
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