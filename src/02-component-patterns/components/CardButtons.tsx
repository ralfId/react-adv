import { useContext } from "react";
import { ProductContext } from "./ShoppingCard";
import styles from '../styles/styles.module.css';


export const CardButtons = () => {
    const { counter, increasBy } = useContext(ProductContext);

    return (

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => { increasBy(-1) }}> - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => { increasBy(+1) }}> + </button>
        </div>

    )
}