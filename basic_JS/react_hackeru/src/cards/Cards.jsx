import { Grid } from '@mui/material';
import React from 'react';
import BusinessCard from './card/BusinessCard';

function Cards(props) {
    const handleDelete =(id) => {
        console.log(`Card ${id} is deleted`);
    };
    const handleEdit =(id) => {
        console.log(`Card ${id} is Edited`);
    };
    const handleLike =(id) => {
        console.log(`Card ${id} is Liked`);
    };
    const cards = [
        {
            id: "eafeswfwr2326346tf3254f",
            title: "first",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-image.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 1,
                city: "Tel Aviv",
                zip: 1312,},
                bizNumber: 1111111,
                likes: [],
                user_id: "4235234234mfnjrb2h3vbry23",
            },
            {
                id: "daslfjhbasfjba123124123",
                title: "second",
                subtitle: "subTitle",
                description: "testing",
                phone: "050-1111111",
                email: "text@text.com",
                web: "https://www.test.co.il",
                image: {
                    url: "assets/images/business-card-top-image.jpg",
                    alt: "image",
                },
                address: {
                    state: "TLV",
                    country: "Israerl",
                    street: "Dizingof",
                    houseNumber: 2,
                    city: "Tel Aviv",
                    zip: 1312,},
                    bizNumber: 1111111,
                    likes: [],
                    user_id: "4235234234mfnjrb2h3vbry24",
                },
                {
                    id: "daslfjhbasfjba123124236",
                    title: "third",
                    subtitle: "subTitle",
                    description: "testing",
                    phone: "050-1111111",
                    email: "text@text.com",
                    web: "https://www.test.co.il",
                    image: {
                        url: "assets/images/business-card-top-image.jpg",
                        alt: "image",
                    },
                    address: {
                        state: "TLV",
                        country: "Israerl",
                        street: "Dizingof",
                        houseNumber: 2,
                        city: "Tel Aviv",
                        zip: 1312,},
                        bizNumber: 1111111,
                        likes: [],
                        user_id: "4235234234mfnjrb2h3vbry25",
                },
                {
                    id: "daslfjhbasfjba123124431",
                    title: "four",
                    subtitle: "subTitle",
                    description: "testing",
                    phone: "050-1111111",
                    email: "text@text.com",
                    web: "https://www.test.co.il",
                    image: {
                        url: "assets/images/business-card-top-image.jpg",
                        alt: "image",
                    },
                    address: {
                        state: "TLV",
                        country: "Israerl",
                        street: "Dizingof",
                        houseNumber: 2,
                        city: "Tel Aviv",
                        zip: 1312,},
                        bizNumber: 1111111,
                        likes: [],
                        user_id: "4235234234mfnjrb2h3vbry26",
                }
    ];
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