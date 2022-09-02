import { CardButtons, CardImage, CardTitle, ShoppingCard } from '../components'
import productsArray from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';

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
                    initialValues={{ 
                        count: 4, 
                        //maxcount: 15
                    }}
                >
                    {
                        ({ reset, increasBy, count, isMaxCountReached }) => (
                            <>
                                <CardImage  />
                                <CardTitle  />
                                <CardButtons  />
                            </>
                        )
                    }

                </ShoppingCard>

            </div>
        </div>
    )
}
