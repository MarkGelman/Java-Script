import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function LifeCycle(props) {

    const [counter, setCounter] = useState(0);

    

    useEffect(()=>{
        console.log("Log in the component mount");

        return () => {
            console.log("The component is unMount");
            localStorage.setItem("counter", counter);
        };
    },[counter])

    const handleInc = () => {
        setCounter((prev) => prev + 1)
    };
    return (
        <div>

            <Button onClick = {handleInc} >+</Button>
            <Typography>{counter}</Typography> 
        </div>
    );
}

export default LifeCycle;