import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { List } from '@mui/icons-material';
import { getCategories } from './api';

export default function SelectCategories() {

    const [category, setCategory] = React.useState('');
    const [list, setList] = React.useState([]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    React.useEffect(() => {
        getCategories()
            .then(x => {
                setList(x.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                >
                    {list && list.map((item, i) => <MenuItem value={item._id}>{item.title}</MenuItem>)}

                </Select>
            </FormControl>
        </Box>
    );
}