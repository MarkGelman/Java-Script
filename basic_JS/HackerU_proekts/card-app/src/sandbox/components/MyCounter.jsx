import { Button, Typography } from '@mui/material';
import React from 'react';
import useCounter from '../hooks/useCounter';

function MyCounter(props) {
    const [counter, incr, decr, reset] = useCounter (5)
    return (
        <div>
            <Button variant="contained" onClick={incr}>+</Button>
            <Button variant="contained" onClick={decr}>-</Button>
            <Button variant="contained" onClick={reset}>RESET</Button>
            <Typography>{counter}</Typography>
        </div>
    );
}

export default MyCounter;