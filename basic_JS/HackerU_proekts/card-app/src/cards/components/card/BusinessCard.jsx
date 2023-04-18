

import {Card,CardActionArea} from "@mui/material";
import React from "react";
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from "./CardActionBar";
import {func} from "prop-types";
import { cardType } from "../../models/cardType";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";

function  BusinessCard ({card, handleDelete, handleEdit, handleLike}) {
    const navigate = useNavigate();

    return (
        <>
            
            <Card sx={{ width: 250, m: 2 }}>
                <CardActionArea onClick = { () => navigate(`${ROUTES.CARD_INFO}/${card.id}`)} >

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

BusinessCard.prototype = {
    card: cardType,
    handleDelete: func, 
    handleEdit: func, 
    handleLike: func,
}

export default BusinessCard;