import { Product } from "../interfaces/interfaces";

const product = {
    id: '1',
    title: 'coffee card 1',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'coffee card 2',
    img: './coffee-mug2.png'
}

 const productsArray: Product[] = [product, product2];
 export default productsArray;