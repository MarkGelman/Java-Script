import React from 'react';
import PageHeader from '../websiteComponents/PageHeader';
import Container from "@mui/material";
import Cards from '../cards/Cards';

function CardsPage(props) {
    return (
        <>
           {/* <Container sx={{ mt: 2}}>  */}
                <PageHeader
                    title='Cards'
                    subtitle='On this page you can find all bussines cards from all categories'
                />
            {/* </Container>  */}
            <Cards/>
        </>
    );
}

export default CardsPage;