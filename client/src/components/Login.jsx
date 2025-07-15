import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { login } from './api';
import { setCurrentUser } from './redux/Action';
import { useNavigate } from 'react-router';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const u = useSelector(x => x.currentUser)
  //  console.log(u);
    let nav = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        login(email, password)
            .then(x => {
                if (x.data.user) {
                    console.log(x.data.user);
                    let y = dispatch(setCurrentUser(x.data.user))
                    console.log(y);
                    swal(`Hello ${x.data.user.name}`, 'Login successful!', 'success');
                    nav('/home')
                } else {
                    swal('Oops!', 'Something went wrong', 'error');
                }
            })
            .catch(err => {
                swal('Error!', err.message, 'error');
            });
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleClick(e)}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    type="submit"
                    id="outlined"
                    value="Login"
                    sx={{ cursor: 'pointer', m: 2 }}
                />
            </Box>
        </Box>
    );
};

export default Login;
