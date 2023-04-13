import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

import LeftNavigation from "./leftNavBar/LeftNavigation";

export default function NavBar() {
    return (
        <AppBar 
            position="sticky" 
            color="primary" 
            elevation={10}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>

                <Box>

                   <LeftNavigation />
                </Box>
            </Toolbar>
        </AppBar>);}