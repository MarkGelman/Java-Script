import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardActions, IconButton } from '@mui/material';
import {func, string} from "prop-types"
import React from 'react';

function CardActionBar({
            id,
            handleDelete,
            handleEdit,
            handleLike 
        }) 
    {
    
        return (
            <>
                <CardActions sx={{justifyContent: "space-between"}}>

                    <Box>
                        <IconButton aria-label='Delete Card' onClick={() => handleDelete(id)}>

                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label='Edit Card' onClick={() => handleEdit(id)}>

                            <ModeEditIcon/>
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton aria-label='Call'>

                            <CallIcon/>
                        </IconButton>
                        <IconButton aria-label='Add to favorite' onClick={() => handleLike(id)}>

                            <FavoriteIcon/>
                        </IconButton>
                    </Box>
                </CardActions> 
            </>
        );
    }

CardActionBar.propTypes = {
    id: string,
    handleDelete: func,
    handleEdit: func,
    handleLike: func,
}

export default CardActionBar;