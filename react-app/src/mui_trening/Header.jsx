import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, IconButton} from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <AppBar
     position='static'
    >
      <Toolbar>
        <Typography
            sx = {{flexGrow: (1)}}
        >
            MUI Shop
        </Typography>
        <IconButton
            color='inherit'
        >
            <ShoppingBasket/>
        </IconButton>
      </Toolbar>
   </AppBar>
  )
}
