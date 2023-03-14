import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/esm/Button';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Readers Room</title>
      </Helmet>
      
      <h1>Featured Products</h1>
      <div className="products">
      {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
          )}
      </div>
      <div id="contact">
        <div className='container'>
          <div className='row'>
              <div className='contact-left'>
              <h1 className='sub-title'>Contact Us</h1>
                <p>info@solutionengineeringhub.com</p>
                <p>+233 545 719 951</p>
              </div>
          </div>
        </div>
      </div>
      <div className='contact-right'>
      <div className="my-3">
      <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    <form>
      <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </form>
      </div>
      </div>
      <div>
      <form>
        <lable>Leave your message:
          <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
        </lable>
        </form>
        </div>
        <div className="mb-3">
                <Button type="submit">
                  Submit
                </Button>
        </div>
      <div class="copyright">
        <p>Copyright © Institute of Solution Engineering Ltd</p>
    </div>
    </div>
    
  );
}
export default HomeScreen;