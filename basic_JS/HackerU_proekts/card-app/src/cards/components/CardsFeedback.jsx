import React from 'react'
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Container, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Cards from './Cards';

export default function CardsFeedback({isLoading, error, cards}) {
    
    if(isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error}/>; 
    if (cards && cards.length === 0) return (
        <Typography m= {2}>
            Oops... it seems there are no business cards to display
        </Typography>
    )
    if(cards)
        return (<Cards cards = {cards}/>)
            
    return null;
}
