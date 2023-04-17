import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Cards from '../Cards';
import axios from 'axios';

function CardsPage(props) {
    const [cards, setCards] = useState([]);

    useEffect (
        () => {getCardsFromAPI();},  
    [])

    const getCardsFromAPI = async () => {
        try {
            //net::ERR_SSL_PROTOCOL_ERROR
            const { data } = await axios.get("http://localhost:8181/cards");
            console.log(data);
            setCards(data)
        } 
        catch (error) {
            console.log('error.message');
        }
    };
  
    return (
        <>
           {
           /* <Container sx={{ mt: 2}}
                    title='Cards'
                    subtitle='On this page you can find all business cards from all categories'
                />
            </Container> */}
            <Cards cards = {cards}/>
        </>
    );
}

export default CardsPage;