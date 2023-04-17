import {shape, string, number, array} from "prop-types";

export const addressType = shape ({
    state: string.isRequired,
    country: string.isRequired,
    street: string.isRequired,
    houseNumber: number.isRequired,
    city: string.isRequired,
    zip: number.isRequired,
})