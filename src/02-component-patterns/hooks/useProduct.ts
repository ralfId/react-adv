import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: ProductArgs) => {
    const [counter, setCounter] = useState(value);
    const isControlled = useRef(!!onChange);

    useEffect(() => {
        setCounter(value);
    }, [value])

    const increasBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({count: value, product}); //el signo '!' es para que no de error ya que el onChange en este punto siempre va a ser una función
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    return {
        counter,
        increasBy,
    }

}
