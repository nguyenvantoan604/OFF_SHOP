import Card from 'react-bootstrap/Card';
import ShortenText from '../ShortenText/ShortenText';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
  return (
    <Link to={`/DetailProduct/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card className='styleProduct' style={{ maxWidth:"100%", margin: 20, height: 360 }}>
        <Card.Img style={{ height: 200, width:300 }} variant="top" src={product.thumbnail} />
        <Card.Body style={{ position: 'relative'}}>
          <Card.Title >
          <ShortenText text={product.title} maxLength={28} />
          </Card.Title>
          <Card.Text style={{ fontSize: 14 }}>
            <ShortenText text={product.description} maxLength={32} />
          </Card.Text>
          <Card.Subtitle style={{ fontSize: 18, color: 'red' }}>{product.price}$</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Products;
