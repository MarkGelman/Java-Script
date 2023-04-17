import { Box } from '@mui/material';
import React from 'react';

function Main({children}) {
    return (
        <>
            <Box
                sx={{
                    minHeight: "85vh",
                    background: '#e3f2fd'
                    }}
            >
                
                {children}
            </Box> 
        </>
    );
}

export default Main;