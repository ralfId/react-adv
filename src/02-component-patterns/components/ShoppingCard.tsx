import { createContext, ReactElement, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';


export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: React.CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ShoppingCard = ({ children, product, className, style }: Props) => {

    const { counter, increasBy } = useProduct();

    return (
        <Provider value={{ counter, increasBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children
                }
            </div>
        </Provider>
    )
}

