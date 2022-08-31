import { CardButtons, CardImage, CardTitle, ShoppingCard } from '../components'
import productsArray from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();
    const product = productsArray[0];
    return (
        <div>
            <h2>Shopping Store</h2>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ShoppingCard key={product.id}
                    product={product}
                    value={shoppingCart[product.id]?.count || 0}
                    className="bg-dark" style={{ margin: '1em' }}
                    onChange={onProductCountChange}
                    initialValues={{ count: 4, maxcount: 15 }}
                >
                    {
                        ({ reset, increasBy, count, isMaxCountReached }) => (
                            <>
                                <CardImage className='custom-image' />
                                <CardTitle className="text-white " />
                                <CardButtons className="custom-btns" />
                                <div>
                                    <button onClick={reset}>Reset</button>
                                    <button onClick={() => { increasBy(-2) }}>-2</button>
                                    {
                                        (!isMaxCountReached) &&
                                        <button onClick={() => { increasBy(2) }}>+2</button>
                                    }
                                    <span style={{ color: 'white' }}>{count}</span>
                                </div>
                            </>
                        )
                    }

                </ShoppingCard>

            </div>
        </div>
    )
}
