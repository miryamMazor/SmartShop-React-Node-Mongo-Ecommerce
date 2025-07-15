import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addCategory } from './api';
import swal from 'sweetalert';

export default function AddCategory() {

    const [title, setTitle] = React.useState()

    const handleClick = () => {
        const category = {
            title
        }

        console.log(category);

        addCategory(category)
            .then(x => {
                if (x == true)
                    swal('Success!', 'add category succeed', 'success')
                else {
                    swal('Oopps!', 'something went wrong', 'error')
                }
            })
            .catch(err => {
                swal('Error!', err.message, 'error')
            })
    }

    return (
        <>
            <h4>Add Category:</h4>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Title" variant="outlined" onBlur={(e) => setTitle(e.target.value)} />
                <Button variant="outlined" onClick={handleClick}>Add</Button>
            </Box>
        </>
    );
}
