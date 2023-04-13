import React from 'react';
import PageHeader from '../components/PageHeader';
import { CardMedia, Container, Grid } from '@mui/material';

function PageAbout(props) {
    const card = {
        id: "daslfjhbasfjba123124236",
        title: 'title',
        subtitle: 'subtitle',
        description: "testing",
        phone: "050-0000000",
        email: "text@text.com",
        web: "https://www.test.co.il",
        image: {
            url: "assets/images/business-card-top-image.jpg",
            alt: "image",
        },
        address: {
            state: "TLV",
            country: "Israel",
            street: "Shinkin",
            houseNumber: 3,
            city: "tel aviv",
            zip: 1312,
        },
        bizNumber: 1000000,
        likes: [],
        user_id: "4235234234mfnjrb2h3vbry25",
    }
    return (
        <Container> 
            <PageHeader 
                title = "About Page" 
                subtitle='Lorem ipsum dolor sit amat consectetur adipisicing elit.'
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} alignSelf='center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Laborum soluta perspiciatis, at sunt aliquam numquam sint vel! Rem incidunt quos ipsam vel 
                    odit, cumque laborum alias est molestias itaque magni voluptate, molestiae ullam doloribus, 
                    in omnis minus sit mollitia quae modi dicta facilis sint beatae porro? Reprehenderit, 
                    laboriosam esse. Praesentium!
                </Grid>
                <Grid item xs={2} md={4} alignSelf='center'>

                <CardMedia
                        component="img"
                        height="140"
                        image={card.image.url}
                        alt={card.image.alt}
                /> 
                </Grid>
            </Grid>
        </Container>
    );
}

export default PageAbout;