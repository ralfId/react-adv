

// Forma #2
import { ShoppingCard as ShoppingCardHOC} from "./ShoppingCard";
import { CardButtons } from "./CardButtons";
import { CardImage } from "./CardImage";
import { CardTitle } from "./CardTitle";
import { ProductPropsHOC } from "../interfaces/interfaces";


export const ShoppingCard:ProductPropsHOC = Object.assign(ShoppingCardHOC, {
    Title: CardTitle,
    Image: CardImage,
    Buttons: CardButtons,
});

export default ShoppingCard;


// Forma #1
export { CardButtons } from "./CardButtons";
export { CardImage } from "./CardImage";
export { CardTitle } from "./CardTitle";
//FIN Forma #1