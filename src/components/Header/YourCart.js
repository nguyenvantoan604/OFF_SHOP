
import { useStoreContext } from "../Context/Context"
import "./YourCart.css"
import { MdDelete } from "react-icons/md"


const YourCart = ({product}) => {

  const {dispatch} = useStoreContext()


  return (

    <div className='yourCart'>
         <div className='textYourCart'>
        <img src={product.thumbnail} alt={product.title}/>
        <span>{product.title}</span>
        <span style={{fontSize:14, color:"red"}}>{product.price}$</span>
        </div>
          <i onClick={() => dispatch({
            type:"REMOVE_TO_CART",
            payload:product
          })}>{<MdDelete/>}</i>
    </div>
   
  
  )
}

export default YourCart