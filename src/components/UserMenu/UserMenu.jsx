import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations2';

const UserMenu = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{auth.user.email }</p>
            <button
                type="button"
                className={css.btnLog}
                onClick={() => dispatch(logOut())}
            >Logout</button>
        </div>
    );
 };

export default UserMenu;