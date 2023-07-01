import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import { Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux';
import css from './LoginForm.module.css';


const LoginForm = () => {
    
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
        
    };
    
    if (auth.isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <h1 className={css.title}>LoginPage</h1>
            <form onSubmit={handleSubmit}
                autoComplete="off"
                className={css.form}
            >

                <label >
                    Email
                    <input type="email" name="email" />
                </label>
                <label >
                    Password
                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                    />
                </label>
                <button type="submit"
                    className={css.btnForm}>Log In</button>
            </form>
        </>
    )
};

export default LoginForm;