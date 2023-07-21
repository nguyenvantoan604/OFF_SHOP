import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useStoreContext } from '../Context/Context'
import {ListGroup } from 'react-bootstrap'
import { MdDelete } from "react-icons/md"


const Cart = () => {

    const { state: { cart },dispatch } = useStoreContext()

    const [total, setTotal] = useState()



    useEffect(() =>{
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)* Number(curr.qty),0))
    },[cart])

    return ( 
        <div className='Cart_main'>
         <div className='cart'>
           <ListGroup>
            {cart.map(prod => 
               <ListGroup.Item key={prod.id}>
                 <div className="cart_text">
                 <img style={{height:100, width:100}} src={prod.thumbnail} alt={prod.title}/>
                 <span>{prod.title}</span>
                 <span>{prod.price}$</span> 
                 <input 
                 style={{width:30}} 
                 type='number'
                 value={prod.qty}
                 onChange={(e) =>(dispatch({
                    type:"CHANGE_PRODUCT",
                    payload:{
                        id:prod.id,
                        qty:e.target.value
                    }

                 }))}
                  />

                 <i onClick={() => dispatch({
                        type:"REMOVE_TO_CART",
                        payload:prod
                    })}><MdDelete/></i>
          
                 </div>
                 
             
               </ListGroup.Item>
            )}
          </ListGroup>
         </div>
         <div className='total'>
             <h3 className='total_title'>Products ({cart.length})</h3>
             <span style={{fontSize:20, fontWeight:700}}>Total:  {total}$</span>
             <button type='button' disabled={cart.length===0}>Product to checkOut</button>
            </div>
        </div>
      
        
    )
}

export default Cart