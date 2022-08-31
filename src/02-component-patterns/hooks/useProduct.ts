import { useEffect, useState, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues,
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: ProductArgs) => {
    const [counter, setCounter] = useState(initialValues?.count || value);
    const isMounted = useRef(false);



    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);

    }, [value])


    useEffect(() => {
        isMounted.current = true;
    }, []);


    const increasBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);

        if (initialValues?.maxcount && newValue > initialValues.maxcount) return;

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }


    const reset = () => {
        setCounter(initialValues?.count || value);
    }
    return {
        counter,
        maxCount: initialValues?.maxcount,
        isMaxCountReached: !!initialValues?.maxcount && initialValues.maxcount === counter,
        
        
        increasBy,
        reset,
    }

}
