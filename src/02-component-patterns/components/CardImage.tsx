import { useContext } from "react";
import { ProductContext } from "./ShoppingCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string, 
    image?: string,
    style?: React.CSSProperties,
}

export const CardImage = ({ image, className, style }: Props) => {

    const { product } = useContext(ProductContext);

    let ImageToShow: string;

    if (image) {
        ImageToShow = image;
    } else if (product.img) {
        ImageToShow = product.img;
    } else {
        ImageToShow = noImage;
    }


    return (

        <img className={`${styles.productImg} ${className}`} src={ImageToShow} alt="coffee mug" style={style}/>
    )
}