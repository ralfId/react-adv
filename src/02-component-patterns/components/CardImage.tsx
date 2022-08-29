import { useContext } from "react";
import { ProductContext } from "./ShoppingCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css';


export const CardImage = ({ image = '' }) => {

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

        <img className={styles.productImg} src={ImageToShow} alt="coffee mug" />
    )
}