import { Button, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useState } from "react";
import MyButton from "./MyButton";

export default function Memoization() {

    const [counter, setCounter] = useState(0);

    const decrement = useCallback(() => {
        setCounter ((prev) => prev - 1);
    }, []);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };
    
    return (
        <div>
            <Typography>{counter}</Typography>
            <Button onClick={increment}>+</Button>
            <MyButton label={"-"} func={decrement}/>
        </div>)
    }