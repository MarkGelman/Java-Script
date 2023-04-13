import {shape, string} from "prop-types";

export const imgType = shape ({
    url: string.isRequired,
    alt: string.isRequired,
})