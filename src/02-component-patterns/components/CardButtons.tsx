import { useContext } from "react";
import { ProductContext } from "./ShoppingCard";
import styles from '../styles/styles.module.css';
import { useCallback } from "react";

export interface Props {
    className?: string;
    style?: React.CSSProperties,
}
export const CardButtons = ({ className, style }: Props) => {
    const { counter, increasBy, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (

        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => { increasBy(-1) }}> - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => { increasBy(+1) }} style={{}}> + </button>
        </div>

    )
}