import { CardButtons, CardImage, CardTitle, ShoppingCard } from '../components'
import  '../styles/custom-styles.css'

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
                    <ShoppingCard product={product} className="bg-dark">
                        <CardImage className='custom-image'/>
                        <CardTitle className="text-white "/>
                        <CardButtons className="custom-btns"/>
                    </ShoppingCard>
                </div>

                <div>
                    <h3>Forma 2</h3>
                    <ShoppingCard product={product} className="bg-dark">
                        <ShoppingCard.Image className='custom-image'/>
                        <ShoppingCard.Title className="text-white "/>
                        <ShoppingCard.Buttons className="custom-btns"/>
                    </ShoppingCard>
                </div>

                {/* <div>
                    <h3>Inline Styles</h3>
                    <ShoppingCard product={product} style={{backgroundColor: "palegreen"}}>
                        <ShoppingCard.Image style={{ border:'1px solid #000', borderRadius:'4px', padding:'5px', width:'200px'}} />
                        <ShoppingCard.Title style={{ color: 'DarkGray'}}/>
                        <ShoppingCard.Buttons style={{flex:'flex', alignContent:'space-between'}}/>
                    </ShoppingCard>
                </div> */}

            </div>

        </div>
    )
}
