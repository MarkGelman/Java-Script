import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function LifeCycle(props) {

    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log("Log in the component mount");

        return () => {
            console.log("The component is unMount")
        };
    },[])

    const handleInc = () => {
        setNumber((prev) => prev + 1)
    };

    return (
        <div>

            <Button onClick = {handleInc} >+</Button>
            <Typography>{number}</Typography> 
        </div>
    );
}

export default LifeCycle;