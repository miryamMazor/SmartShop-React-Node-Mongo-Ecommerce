import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { updateUser } from './api';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCurrentUser } from './redux/Action';

export const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const u = useSelector(x => x.currentUser);
    console.log(u);
    let nav = useNavigate();
    const userstor = useSelector(x => x.currentUser);
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        const user = {
            name: e.target[0].value,
            email: e.target[2].value,
            password: e.target[4].value
        };
        updateUser(userstor._id, user)
            .then(response => {
                debugger;
                console.log(response.data.user);
                if (response.data.user) {
                    let y = dispatch(setCurrentUser(response.data.user))
                    swal(`Update ${user.name}`, 'Update User successfully!', 'success');
                    nav('/home');
                } else {
                    swal('Error!', 'Something went wrong', 'error');
                }
            })
            .catch(err => {
                swal('Error!', err.message, 'error');
            });
    };

    return (
        <>
            <h1>עדכון פרטים אישיים</h1>
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
                onSubmit={handleClick}
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
                        label="Username"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                    />
                    <TextField
                        type="submit"
                        id="outlined"
                        value="Update"
                        sx={{ cursor: 'pointer', m: 2 }}
                    />
                </Box>
            </Box>
        </>
    );
};
