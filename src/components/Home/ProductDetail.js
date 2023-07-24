import React from 'react';
import { useParams } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import { useStoreContext } from '../Context/Context';
import './ProductDetail.css'
const ProductDetail = () => {
  const { id } = useParams(); 
  const { state: { cart,products }, dispatch } = useStoreContext();
  const product = products.find((p) => p.id === parseInt(id, 10));
  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className='ProductDetail'>
      <img  src={product.thumbnail} alt={product.title} />
      <div className='text-detail'>
      <h1 className='title-detail'>{product.title}</h1>
      <p className='des-detail'>{product.description}</p>
      <span className='brand-detail'>Trademark: {product.brand}</span>
      <span className='price-detail'>Price: {product.price}$</span>
       <div className='btn-detail'>
       {cart.some((c) => c.id === product.id) ? (
        <Button
          onClick={() =>
            dispatch({
              type: 'REMOVE_TO_CART',
              payload: product,
            })
          }
          variant='danger'
        >
          Remove To Cart
        </Button>
      ) : (
        <Button
          onClick={() =>
            dispatch({
              type: 'ADD_TO_CART',
              payload: product,
            })
          }
          variant='primary'
        >
          Add To Cart
        </Button>
      )}
       </div>
      </div>

    </div>
  );
};

export default ProductDetail;
