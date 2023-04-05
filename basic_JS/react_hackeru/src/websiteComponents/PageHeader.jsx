import { Divider, Typography } from '@mui/material';
import React from 'react';
import {func, string} from "prop-types"

function PageHeader({title, subtitle}) {
    return (
        <>
            <Typography variant="h2" component="h1">
                {title} 
            </Typography>
            <Typography variant="h5" component="h2">
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2}}/>
        </>
    );
}

export default PageHeader;

PageHeader.propTypes = {
    title: string.isRequired,
    subtitle: string.isRequired,

}