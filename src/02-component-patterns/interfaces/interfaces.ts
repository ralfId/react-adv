import { Props as ProductsButtonsProps} from "../components/CardButtons";
import { Props as ProductImageProps } from "../components/CardImage";
import { Props as ProductTitleProps} from "../components/CardTitle";
import { Props as ShoppingCardProps } from "../components/ShoppingCard";

export interface Product {
    id: string,
    title: string,
    img?: string,
    //count?: number,
}
export interface Btns {

    increasBy: (value: number) => void,
    counter: number,
}

export interface ProductContextProps {
    increasBy: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?: number;
}

export interface ProductPropsHOC {
   //({ children, product }: ShoppingCardProps): JSX.Element;
    (Props: ShoppingCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductsButtonsProps) => JSX.Element,

}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxcount?: number;
}


export interface ProductCardHandlers {
    count: number;
    maxCount?: number;
    isMaxCountReached: boolean;
    product: Product;

    
    increasBy: (value: number) => void;
    reset: () => void;
}