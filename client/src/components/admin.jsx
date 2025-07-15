import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { adminlogin } from './api';
import { useNavigate } from 'react-router';
import { admin } from './redux/Action';
  

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const u = useSelector(x => x.currentUser)
    let nav = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        adminlogin(email, password)
            .then(x => {
                if (x.data.admin) {
                    console.log(x.data);
                    console.log(x.data.admin);
                    let y = dispatch(admin(x.data.admin))
                    console.log(y);
                    
                    swal(`Hello ${x.data.admin.name} admin`, 'Login successful!', 'success');
                nav('/home')
                } 
            
                else {
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

export default Admin;
