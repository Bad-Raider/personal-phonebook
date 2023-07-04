import { css } from '@emotion/react'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import { Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled'



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

    const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    required
                    sx={{ width: "80%" }}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    required
                    sx={{}}
                />
                <Button
                    variant="contained"
                    type="submit"
                    
                >Login</Button>
            </div>
        </form>
 
    )
}

export default LoginForm;


