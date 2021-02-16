import { GET_SUBBRAND } from "../Constant/constants";

export const getSubBrand = (subBrand) => {
    return {
        type: GET_SUBBRAND,
        subBrand
    }
    
}
