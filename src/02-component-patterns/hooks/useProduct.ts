import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: ProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value])

    const increasBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    return {
        counter,
        increasBy,
    }

}
