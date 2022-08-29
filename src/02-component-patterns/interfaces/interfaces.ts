import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}
export interface Product {
    id: string,
    title: string,
    img?: string
}
export interface Btns {

    increasBy: (value: number) => void,
    counter: number,
}

export interface ProductContextProps {
    increasBy: (value: number) => void;
    counter: number;
    product: Product;
}

export interface ProductPropsHOC{
     ({ children, product }: Props): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ image }: { image?: string }) => JSX.Element,
    Buttons: () => JSX.Element,

}