import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Akun = () => {
  const isLoggedIn = true;

  return (
    <div style={{
      backgroundImage: 'url("/images/f2.jpeg")',
      backgroundSize: 'cover',
    }}>
      <Container style={{ color: 'white' }}>
        <h2>Akun</h2>
        <Row>
        <Col md={4} className="mb-4" >
        <Card>
              <Card.Img
                variant="top"
                src="/images/gardenias.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Gardenias</Card.Title>
                <Card.Text>
                    
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div >
        <h2 className="mt-5" style={{ backgroundImage: 'url("/images/nino1.png")', backgroundSize: 'cover', height: '50px', textAlign: 'center', color: 'black' }}>
          whatsapp</h2>
        <h1  style={{ backgroundImage: 'url("/images/nino.png")', backgroundSize: 'cover', height: '400px', textAlign: 'center', color: 'white' }}>
          08813269081</h1>
      </div>
    </div>

  );
};

export default Akun;
