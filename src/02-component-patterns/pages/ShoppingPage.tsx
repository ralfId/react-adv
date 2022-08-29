import React from 'react'
import { CardButtons, CardImage, CardTitle, ShoppingCard } from '../components'

const product = {
    id: '1',
    title: 'coffee card'
}
export const ShoppingPage = () => {
    return (
        <div>
            <h2>Shopping Store</h2>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <div>
                    <h3>Forma 1</h3>
                    <ShoppingCard product={product}>
                        <CardImage />
                        <CardTitle />
                        <CardButtons />
                    </ShoppingCard>
                </div>

                <div>
                    <h3>Forma 2</h3>
                    <ShoppingCard product={product}>
                    <ShoppingCard.Image />
                    <ShoppingCard.Title  />
                    <ShoppingCard.Buttons />
                </ShoppingCard>
                </div>
                
            </div>

        </div>
    )
}
