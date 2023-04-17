import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function LifeCycle(props) {
    
    const initialState = ()=> Number(localStorage.getItem('counter'))|| 0
    const [counter, setCounter] = useState(initialState);

    useEffect (()=>{
        localStorage.setItem('counter', counter);
    })
        

    //const [counter, setCounter] = useState(0);

    // useEffect(()=>{
    //     if (localStorage.getItem('counter'))
    //         {console.log('useEffect counter =' + counter);
    //         setCounter(Number(localStorage.getItem('counter')));}
    //     return () => {
    //         console.log('return counter='+ counter);
    //         localStorage.setItem("counter", counter);
    //     };
    // },[])

    const handleInc = () => {
        setCounter((prev) => prev + 1)
        console.log('handleInc = ' + counter);
    };
    return (
        <div>

            <Button onClick = {handleInc} >+</Button>
            <Typography>{counter}</Typography> 
        </div>
    );
}

export default LifeCycle;