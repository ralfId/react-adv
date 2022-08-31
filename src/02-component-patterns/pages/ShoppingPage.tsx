import { CardButtons, CardImage, CardTitle, ShoppingCard } from '../components'
import productsArray from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h2>Shopping Store</h2>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    productsArray.map(product => (
                        <ShoppingCard key={product.id}
                            product={product}
                            value={shoppingCart[product.id]?.count || 0}
                            className="bg-dark" style={{ margin: '1em' }}
                            onChange={onProductCountChange}
                        >
                            <CardImage className='custom-image' />
                            <CardTitle className="text-white " />
                            <CardButtons className="custom-btns" />
                        </ShoppingCard>
                    ))
                }

            </div>

            <div>

                <code>{JSON.stringify(shoppingCart, null, 2)}</code>
            </div>
            <div className='shopping-cart '>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (

                        <ShoppingCard key={product.id}
                            product={product}
                            value={product.count}
                            className="bg-dark" style={{ margin: '1em' }}
                            onChange={onProductCountChange}
                            >
                            <CardImage className='custom-image' />
                            <CardTitle className="text-white " />
                            <CardButtons className="custom-btns" />
                        </ShoppingCard>
                    ))
                }
            </div>
        </div>
    )
}
