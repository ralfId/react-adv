import { useContext } from "react";
import { ProductContext } from "./ShoppingCard";
import styles from '../styles/styles.module.css';


export const CardTitle = ({ title }: { title?: string }) => {

    const { product } = useContext(ProductContext);


    return (

        <span className={styles.productDescription}>{title ? title : product.title}</span>

    )
}