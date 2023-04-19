import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Cards from '../components/Cards';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import useCards from '../hooks/useCards';
import { Container, Typography } from '@mui/material';
import CardsFeedback from '../components/CardsFeedback';

function CardsPage(props) {
  
    const {cards, isLoading, error, handleGetCards} = useCards();
    
    useEffect(()=> {
        handleGetCards();
    },[]);

   
        return (
            <>
                <Container sx={{ mt: 2}} >
                    <PageHeader 
                        title='Cards'
                        subtitle='On this page you can find all business cards from all categories'
                    />
                    <CardsFeedback cards={cards} isLoading={isLoading} error={error}/>
                </Container> 
            </>
        );
    
    return null;
}

export default CardsPage;