import * as React from 'react';
import { Typography,Button, Grid, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import { useStateValue } from '../reducer/ContextProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'Paypal',
      label: 'Paypal',
    },
    {
      value: 'Wave',
      label: 'WavePay',
    },
  ];

const Payment = () => {
    const [currency, setCurrency] = React.useState('');
    const [{ basket }, dispatch] = useStateValue();
    const isActive = useMediaQuery("(max-width: 650px)")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
      };

    const remove_from_basket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <Stack sx={{ height: "100%", m: "2rem" }}>
            <Stack spacing={4} direction={!isActive ? "row" : "column"} sx={{ borderBottom: "1px solid gray", p: "1rem" }}>
                <h4>Address</h4>
                <TextField type="number" variant='standard' label='Phone Number' id="outlined-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+95 </InputAdornment>,
                    }} />
                <TextField type="text" variant='standard' label='Address to Delivery' />
                <Button variant='contained'>Submit</Button>
            </Stack>

            {/* This section is for the Basket Section */}
            <Stack spacing={3} direction="column" sx={{p:"1rem"}}>
                {basket.map(i => (
                    <Stack key={i.id} direction="row" spacing={3} mx={1} sx={{ borderBottom: "1px solid lightgray", padding: "10px" }}>
                        <img src={i.img} width="150px" height="100px" />
                        <Stack spacing={1}>
                            <Typography variant='h5'>Shop</Typography>
                            <Typography variant='p' noWrap component="strong">Price : $ {i.price}</Typography>
                            <Button variant='outlined' endIcon={<DeleteIcon />} onClick={() => remove_from_basket(i.id)} size="small">Remove</Button>
                        </Stack>
                    </Stack>
                ))}
            </Stack>


            <Stack spacing={3} direction="column" sx={{p: "1rem"}}>
                <h3 style={{borderBottom:"1px solid gray", width:"150px", padding:"10px 0"}}>Payment Section</h3>

                <Stack spacing={4} direction="row">
                    <h4>Payment Methods</h4>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select payment method"
                        required
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Payment;
