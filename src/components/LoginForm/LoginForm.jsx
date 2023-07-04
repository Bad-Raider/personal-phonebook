import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate  } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { Form } from './styled';
import { logIn } from '../../redux/auth/operationsAuth';

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
        <Form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
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


