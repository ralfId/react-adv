import { createContext, ReactElement, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ShoppingCard = ({ children, product }: Props) => {

    const { counter, increasBy } = useProduct();

    return (
        <Provider value={{ counter, increasBy, product }}>
            <div className={styles.productCard}>
                {
                    children
                }
                {/* <CardImage image={product.img} />
            <CardTitle title={product.title} />
            <CardButtons increasBy={increasBy} counter={counter} /> */}
            </div>
        </Provider>
    )
}

