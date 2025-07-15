import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Singup, login } from './api';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCurrentUser } from './redux/Action';
//import  {setCurrentUser}  from "./Redux/Action";
//import { useDispatch } from 'react-redux';


export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const u = useSelector(x => x.currentUser)
    console.log(u);
    let nav = useNavigate()
    // let dis=useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
        debugger
        const user = {
            name: e.target[0].value,
            email: e.target[2].value,
            password: e.target[4].value
        };
        debugger
        login(user.email, user.password)
            .then(x => {
                if (!x.data.message) {
                    let y = dispatch(setCurrentUser(x.data.user))
                    swal(`Hello ${x.data.user.name}`, 'Signup User successfully!', 'success');
                    nav('/home')
                    // localStorage.setItem('loggedInUser', JSON.stringify(x.data.user));
                }
                else {
                    Singup(user)

                        .then(x => {
                            // dis(setCurrentUser())
                            debugger

                            if (x.data != null) {
                                let y = dispatch(setCurrentUser(x.data.user))
                                swal(`Hello ${user.name}`, 'Signup User successfully!', 'success');
                                nav('/home')
                            } else {
                                swal('Oops!', 'Something went wrong', 'error');
                            }
                        })
                        .catch(err => {
                            debugger
                            swal('Error!', err.message, 'error');
                        });
                }
            })
            .catch(err => {
                Singup(user)

                    .then(x => {
                        // dis(setCurrentUser())
                        debugger

                        if (x.data != null) {
                            let y = dispatch(setCurrentUser(x.data.user))
                            swal(`Hello ${user.name}`, 'Signup User successfully!', 'success');
                            nav('/home')
                        } else {
                            swal('Oops!', 'Something went wrong', 'error');
                        }
                    })
                    .catch(err => {
                        swal('Error!', err.message, 'error');
                    });
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
                    value="Signup"
                    sx={{ cursor: 'pointer', m: 2 }}
                />
            </Box>
        </Box>
    );
};
