import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';


export interface Props {
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    product: Product;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ShoppingCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increasBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{ counter, increasBy, product, maxCount }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children({
                        count: counter,
                        maxCount: initialValues?.maxcount,
                        isMaxCountReached,
                        product,
                        reset,
                        increasBy
                    })
                }
            </div>
        </Provider>
    )
}

