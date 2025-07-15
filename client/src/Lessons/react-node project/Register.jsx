import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { register } from './api';
import swal from 'sweetalert';

export const Register = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e);
        const user = {
            name: e.target[0].value,
            email: e.target[2].value,
            password: e.target[4].value
        }
        console.log(user);
        register(user)
            .then(x => {
                if (x.data == true) {
                    swal(`Hello ${user.name}`, 'register successfuly!', 'success')
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
                    label="username"
                />
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
                {/* <Button variant="outlined" onClick={handleClick}>Register</Button> */}

            </div>
        </Box>
    </>
}