import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <>
        <div className='Controls'>
            <botton className='Botton' onClick={decrement}>-</botton>
            <h4 className='Number'>{quantity}</h4>
            <botton className='Botton' onClick={increment}>+</botton>
        </div>
            
        <div>
            <botton className='Button' onClick={() => onAdd(quantity)} disable={!stock}>
                Agregar al carrito
            </botton>
        </div>
        </>
    )
}

export default ItemCount