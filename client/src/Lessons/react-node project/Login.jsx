import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { login } from './api';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../components/Redux/UserAction';

export const Login = () => {
    const dispatch= useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        const user = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        login(user)
            .then(x => {
                console.log(x.data);
                if (x.data.user) {
                    swal(`Hello ${x.data.user.name}`, 'login successfuly!', 'success')
                 
                }
                else {
                    swal('Oopps!', 'something went wrong', 'error')

                }
            })
            .catch(err => {
                swal('Error!', err.message, 'error')
            })
    }

    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleClick(e)}
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="email"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="password"
                />
                <TextField
                    type={'submit'}
                    id="outlined"
                />
            </div>
        </Box>
    </>
}