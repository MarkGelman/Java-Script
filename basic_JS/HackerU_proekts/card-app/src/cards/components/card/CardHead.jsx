import { CardMedia } from '@mui/material';
import React from 'react';
import { imgType } from '../../models/imgType';

function CardHead({image}) {
    return (
        <>
            <CardMedia
                        component="img"
                        height="140"
                        image={image.url}
                        alt={image.alt}
            /> 
        </>
    );
}

CardHead.prototype = {
    image: imgType
}

export default CardHead;