import axios from "axios";

const apiUrl = "http://localhost:8181";

export const getCards = async () => {
    try {
        const {data} = await axios.get("http://localhost:8181/cards");
        return data;

    }catch(error) {
        return Promise.reject (error.message);
        // throw new Error(error.message); -- можно также так вернуть ошибку.
    }
}