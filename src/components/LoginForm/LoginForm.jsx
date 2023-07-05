import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Form } from './styled';
import { logIn } from '../../redux/auth/operationsAuth';
import Swal from 'sweetalert2';

const LoginForm = () => {
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            }))
            .unwrap()
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Welcome!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(e => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    text: `Invalid email or password. Please, try again!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
        form.reset();
    }  
      
    return (
        <Form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <h2>Log in </h2>

            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                required
                sx={{ width: "100%", mb: 3 }}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
                sx={{ width: "100%", mb: 3 }}
            />
            <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                sx={{ width: "100%", mb: 3 }}
            >Login
            </Button>
        </Form>
    );
}

export default LoginForm;


