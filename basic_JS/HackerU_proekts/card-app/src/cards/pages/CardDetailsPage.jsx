import React from 'react';
import { useParams } from 'react-router-dom';

function CardDetailsPage() {

    const {id} = useParams();

    return (
        <div>
            Wellcome to cards details page for card {id}
        </div>
    );
}

export default CardDetailsPage;