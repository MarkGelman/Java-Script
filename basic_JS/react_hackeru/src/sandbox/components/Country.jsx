import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
    useEffect(
        () => {getDataFromAPI();}, []
    );
    const [myCountry, setMyCountry] = useState({})
    console.log(myCountry)

    const getDataFromAPI = async () => {
        try {
            const { data } = await axios.get("https://restcountries.com/v3.1/all");
            console.log(data);
            setMyCountry(data)
        } 
        catch (err) {
            console.log(err.message);
        }
    };

    if (myCountry != {}) {
        
        console.log (myCountry + 'enter');
        return <div>{myCountry[78].name.common}</div>;
    }
}
