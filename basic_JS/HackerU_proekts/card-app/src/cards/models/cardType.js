import {shape, string, number, array} from "prop-types";
import { imgType } from "./imgType";
import { addressType } from "./adressType";

export const cardType = shape ({
    id: string.isRequired,
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    web: string.isRequired,
    image: imgType,
    address: addressType,   
    bizNumber: number.isRequired,
    likes: array,
    user_id: string.isRequired,
    }
)