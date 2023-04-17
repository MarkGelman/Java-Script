import { Avatar, Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
    useEffect(
        () => {getDataFromAPI();}, []
    );
    const [countries, setCountries] = useState([])

    const getDataFromAPI = async () => {
        try {
            const { data } = await axios.get("https://restcountries.com/v3.1/all");
            console.log(data);
            setCountries(data)
        } 
        catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            {countries?.map((country) => 

                    <Box
                        display = "flex"
                        sx={{justifyContent: "space-between"}}
                        key={JSON.stringify(country)}
                    >

                        <Avatar src={country.flags.png}  alt={`${country.name.common} flag`} /> 
                        <Typography sx={{width: 150}}> {country.name.common}</Typography>
                        <Typography sx={{width: 150}}> {country.capital?.[0]}</Typography>
                    </Box>
            )}
        </div>
    )                            
}
