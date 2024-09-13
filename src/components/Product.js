import React from 'react'
import { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
import StatusCode from '../utils/StatusCode'

const Product = () => {
    const dispatch=useDispatch()
    const {data: products,status} = useSelector(state => state.products)

    // const [products,getProducts]=useState([])

    useEffect(()=>{
        // dispatch an action for fetch products
        dispatch(getProducts())
        // api
        // fetch('https://fakestoreapi.com/products')
        // .then(data=>data.json())
        // .then(result=>getProducts(result))
        
    },[])

    if(status === StatusCode.LOADING){
        return <p>Loading....</p>
    }

    if(status === StatusCode.ERROR){
        return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Something went wrong!</strong>
        <span className="block sm:inline"> Try again later.</span>
      </div>
      
    }
        

// ADD ACTION
    const addToCart = (product)=>{
        // dispatch an add action
        dispatch(add(product))
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
                    <Button className='bg-blue-500 rounded-md px-4 py-1 text-white' onClick={()=>addToCart(product)}>Add To Cart</Button>
                    </div>

                    </Card.Footer>
                </Card>
            </div>
        );

    })
  return (
    <div>
        <h1 className='text-2xl font-bold py-5'>Product Dashboard</h1>
        {/* {JSON.stringify(products)} */}
        <div className="flex flex-wrap -mx-4">
        {cards}

        </div>
    
    </div>
  )
}

export default Product