import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';


export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ShoppingCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increasBy } = useProduct({onChange, product, value});

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

