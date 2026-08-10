import { allProductsData } from "./allProductsData";

export const bestsellerData = allProductsData.filter(product => product.isBestseller === true);