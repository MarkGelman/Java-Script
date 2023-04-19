import { useState } from "react";
import { getCards } from "../services/cardApiServices";


export default function useCards() {

    const [cards, setCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const handleGetCards = async () => {
        try {
            const cards  = await getCards();
            setIsLoading(false);
            setCards(cards)
        } 
        catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return {
        cards,
        isLoading,
        error,
        handleGetCards
    }

}

