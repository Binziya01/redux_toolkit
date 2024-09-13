import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const products = useSelector(state=>state.cart)

  const dispatch = useDispatch()

  // REMOVE ACTION
  const removeToCart = (id)=>{
    // dispatch a remove action
    dispatch(remove(id))

  }

  const cards = products.map((product)=>{

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={product.id}>
            <Card key={product.id} className="shadow-lg rounded-lg overflow-hidden">
                <div className='flex items-center justify-center'>
                <Card.Img variant="top" src={product.image} className="h-[100 px] h-[130px] object-cover" />
                </div>
                <Card.Body>
                    <Card.Title className="text-lg font-bold">{product.title}</Card.Title>
                    <Card.Text className="text-gray-700">INR: {product.price}</Card.Text>
                    
                </Card.Body>
                <Card.Footer className='border h-12'>
                <div className='flex justify-center items-center py-2'>
                <Button className='bg-red-500 rounded-md px-4 py-1 text-white' onClick={() => removeToCart(product.id)}>Remove Item</Button>
                </div>

                </Card.Footer>
            </Card>
        </div>
    );

})

  return (
    <div>
        
        {/* {JSON.stringify(productCart)} */}
        <div className="grid grid-cols-1">
        {cards}

        </div>
    </div>
  )
}

export default Cart