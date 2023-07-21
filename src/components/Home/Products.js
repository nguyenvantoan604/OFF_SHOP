import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStoreContext } from '../Context/Context';


const Products = ({product}) => {

  const {state:{cart},dispatch} = useStoreContext()

  return (

    <Card className='styleProduct' style={{ width: '25%', margin:20,height:500}}>
      <Card.Img style={{height:250}} variant="top" src={product.thumbnail}/>
      <Card.Body style={{position:'relative'}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text >
            {product.description}
        </Card.Text>
        <Card.Subtitle style={{fontSize:18, color:"red"}}>{product.price}$</Card.Subtitle>
        {cart.some(c =>c.id === product.id) ? (
          <Button onClick={() =>dispatch({
            type:"REMOVE_TO_CART",
            payload:product
          })} variant='danger'> Remove To Cart</Button>
          
        ) :(<Button onClick={()=>dispatch({
          type:"ADD_TO_CART",
          payload:product
        })} variant="primary"> Add To Cart</Button>)}

      </Card.Body>
    </Card>

  )
}

export default Products