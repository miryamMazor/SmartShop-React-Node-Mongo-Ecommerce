import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import { setCurrentUser } from './redux/Action';
import { updateUser } from './api';


export const updateupdateUser = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        debugger
        const user = {
            name: e.target[0].value,
            email: e.target[2].value,
            password: e.target[4].value
        };
        debugger
        updateUser(user.email, user.password)
            .then(x => {
                if (x.data.user) {
                    swal(`Hello ${x.data.user.name}`, 'Signup User successfully!', 'success');
                    dispatch(setCurrentUser(response.data.user)); // Update Redux state with the new user info

                } 
                else {}
                    // Singup(user)

                    //     .then(x => {
                    //         // dis(setCurrentUser())
                    //         if (x.data != null) {
                    //             swal(`Hello ${user.name}`, 'Signup User successfully!', 'success');
                    //         } else {
                    //             swal('Oops!', 'Something went wrong', 'error');
                    //         }
                    //     })
                    //     .catch(err => {
                    //         swal('Error!', err.message, 'error');
                    //     });
                
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
