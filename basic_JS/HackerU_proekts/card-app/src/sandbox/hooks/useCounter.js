import { useState } from "react";

export default function useCounter(initialValue=0) {
    const [counter, setCounter] = useState(initialValue);

    const incr=()=> setCounter((prev) => prev + 1);
    const decr=()=> setCounter((prev) => prev - 1);
    const reset=()=> setCounter(initialValue);

    return {
        counter, incr, decr, reset
    };
}

