import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Rating from '../../components/Rating/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/v1/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProducts();
  }, [match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Retour
      </Link>
      <Row>
        <Col md={6} lg={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col className='mt-3' md={6} lg={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Prix: {product.price}€</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className='mt-3' md={12} lg={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Prix:</Col>
                  <Col>
                    <strong>{product.price}€</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? 'En Stock'
                      : 'En cours de réapprovisionnement'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disable={product.countInStock === 0}
                >
                  Ajouter au panier
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
