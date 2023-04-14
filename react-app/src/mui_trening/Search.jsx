import { TextField } from '@mui/material'
import React from 'react'

export default function Search({onChange, value}) {

  return (
    <TextField
        label = "search"
        variant = 'standard'
        type = 'search' 
        value = {value}
        fullWidth
        onChange = {onChange}
        sx={{mb: '1.5rem'}}
    />

  )
}
