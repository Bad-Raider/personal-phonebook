import { useDispatch } from 'react-redux';
import { register } from 'redux/operations2';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
      const dispatch = useDispatch();

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

    return (<>
        <h1 className={css.title}>RegisterPage</h1>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input type="text" name="name" />
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit" className={css.btnForm}>Register</button>
        </form>
    </>);
};


export default RegisterForm;