import React from 'react';
import PageHeader from '../../components/PageHeader';
import Cards from '../Cards';

function CardsPage(props) {
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
                country: "Israel",
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
                    country: "Israel",
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
                        country: "Israel",
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
                        country: "Israel",
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
           {/* <Container sx={{ mt: 2}}>  */}
                <PageHeader
                    title='Cards'
                    subtitle='On this page you can find all business cards from all categories'
                />
            {/* </Container>  */}
            <Cards cards = {cards}/>
        </>
    );
}

export default CardsPage;