import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Cards from '../components/Cards';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { InfoOutlined } from '@mui/icons-material';
import useCards from '../hooks/useCards';
import { Container, Typography } from '@mui/material';

function CardsPage(props) {
  
    const {cards, isLoading, error, handleGetCards} = useCards();
    
    useEffect(()=> {
        handleGetCards();
    },[]);

    if(isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error}/>; 
    if (cards && cards.length === 0) return (
        <Typography m= {2}>
            Oops... it seems there are no business cards to display
        </Typography>
    )
    if(cards)
        return (
            <>
                <Container sx={{ mt: 2}} >
                    <PageHeader 
                        title='Cards'
                        subtitle='On this page you can find all business cards from all categories'
                    />
                </Container> 
                <Cards cards = {cards}/>
            </>
        );
    
    return null;
}

export default CardsPage;