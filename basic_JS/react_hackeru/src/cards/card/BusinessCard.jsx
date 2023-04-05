

import {Card,CardActionArea} from "@mui/material";
import React from "react";
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from "./CardActionBar";
function BusinessCard({card, handleDelete, handleEdit, handleLike}) {
    
    return (
        <>
            <Card sx={{ width: 250, m: 2 }}>
                <CardActionArea>

                    <CardHead 
                        image={card.image}
                    />  

                    <CardBody 
                        title = {card.title}
                        subtitle = {card.subtitle}
                        phone = {card.phone}
                        address = {card.address}
                        bizNumber={card.bizNumber}
                    />
                </CardActionArea>
                <CardActionBar 
                    id = {card.id}
                    handleDelete={handleDelete}
                    handleEdit ={handleEdit}
                    handleLike = {handleLike}
                />
            </Card>
        </>
    );
}

export default BusinessCard;