import React from 'react';
import PageHeader from '../websiteComponents/PageHeader';
import BusinessCard from '../cards/card/BusinessCard';

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
            country: "Israerl",
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
        <> 
            <PageHeader 
                title = "Page About" 
                subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt fugit repellat
                repellendus nam accusantium laboriosam, unde quam porro, quasi aperiam magni eius quis odit explicabo non numquam.'
            />
            <BusinessCard card ={card} key={card.id}/>
        </>
    );
}

export default PageAbout;