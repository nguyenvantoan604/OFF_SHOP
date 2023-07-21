import React from 'react'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa';
import { Container, Navbar,Form, Dropdown, Badge,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useStoreContext } from '../Context/Context';
import YourCart from './YourCart';

const Header = () => {
  const {state:{cart}} = useStoreContext()
  return (
    <>
    <Navbar bg='black' className='header' style={{position:'fixed', top:0}}>
        <Container>
          <Navbar.Brand className='title'>
            <Link to="/"><span style={{color: "white", fontWeight:700, fontSize:27}}>OFF_SHOP</span></Link>
       
          </Navbar.Brand>
        <Navbar.Text className='search'>
          <Form.Control  type="text" placeholder="Search product..." style={{width:600}} className='m-auto' size='md'/>
        </Navbar.Text>
        
        <Nav>
           <Dropdown >
              <Dropdown.Toggle variant='success'>
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg='transparent'>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{minWidth:375}} align={'end'} >
                {cart.length > 0 ? ( <> {cart.map(product => 
                  <YourCart key={product.id} product={product}/>
                  )}
                   <Link to="/cart">
                     <button className="yourCart_btn">Cart</button>
                   </Link></>) : (
                    <span style={{padding:20}}> The cart has no product </span>
                  )} 
               
              </Dropdown.Menu>
           </Dropdown>
        </Nav>
        </Container>
    </Navbar>
    
    </>

  )
}

export default Header;