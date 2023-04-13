import { Grid } from '@mui/material';
import React from 'react';
import BusinessCard from './card/BusinessCard';

function Cards({cards}) {
    const handleDelete =(id) => {
        console.log(`Card ${id} is deleted`);
    };
    const handleEdit =(id) => {
        console.log(`Card ${id} is Edited`);
    };
    const handleLike =(id) => {
        console.log(`Card ${id} is Liked`);
    };

    return (
        <>
            <Grid container>

                    {
                        cards.map((card)=> (
                            <Grid item key={card.id} xs ={12} sm={6} md={4} lg={3}>
                                <BusinessCard 
                                    card ={card} 
                                    key={card.id} 
                                    handleDelete={handleDelete}
                                    handleEdit ={handleEdit}
                                    handleLike = {handleLike}
                                />
                            </Grid>
                        ))
                    }
            </Grid>
        </>
    );
}

export default Cards;