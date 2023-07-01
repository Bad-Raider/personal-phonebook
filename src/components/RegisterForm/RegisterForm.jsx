import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import css from './RegisterForm.module.css';
import { Navigate,   } from "react-router-dom";
import { useSelector } from 'react-redux';



const RegisterForm = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    if (auth.isLoggedIn) {
        return <Navigate to="/" replace />;
    };


    return (<>
        <h1 className={css.title}>RegisterPage</h1>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input type="text" name="name" required/>
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" required/>
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" required/>
            </label>
            <button type="submit" className={css.btnForm}>Register</button>
        </form>
    </>);
};


export default RegisterForm;