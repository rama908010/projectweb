import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Login from './login';
import Informasi from './informasi';
import Akun from './akun';

const dataBunga = [
  { id: 1, nama: 'freeseas', harga: 10000, gambar: '/images/freeseas.webp' },
  { id: 2, nama: 'gardenias', harga: 15000, gambar: '/images/gardenias.webp' },
  { id: 3, nama: 'hydrangeas', harga: 10000, gambar: '/images/hydrangeas.webp' },
  { id: 4, nama: 'lily', harga: 15000, gambar: '/images/lily.webp' },
  { id: 5, nama: 'lotus', harga: 10000, gambar: '/images/lotus.webp' },
  { id: 6, nama: 'morning glory', harga: 15000, gambar: '/images/morningglory.webp' },
];

const App = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [saldoDompet, setSaldoDompet] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [inputDompet, setInputDompet] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const tambahKeKeranjang = (bunga) => {
    setKeranjang([...keranjang, bunga]);
    setTotalHarga(totalHarga + bunga.harga);
  };

  const prosesPembelian = () => {
    if (saldoDompet >= totalHarga) {
      setSaldoDompet(saldoDompet - totalHarga);
      setKeranjang([]);
      setTotalHarga(0);
      alert('Transaksi berhasil!');
    } else {
      alert('Saldo dompet tidak mencukupi!');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setKeranjang([]);
    setSaldoDompet(0);
    setTotalHarga(0);
    setInputDompet('');
  };

  return (
    <Router >
      <Navbar style={{ backgroundImage: 'url("/images/lotus.webp")', backgroundSize: 'cover', height: '50px', textAlign: 'center', color: 'white' }}>
        <Container >
          <Navbar.Brand href="/" style={{ color: 'white' }}>Florist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              
              <Link to="/" className="nav-link" style={{ color: 'white' }}>
                Beranda
              </Link>

              <Link to="/informasi" className="nav-link" style={{ color: 'white' }}>
                Informasi
              </Link>

              <Link to="/akun" className="nav-link" style={{ color: 'white' }}>
                Akun
              </Link>


              {isLoggedIn ? (
                <Link to="/login" className="nav-link" style={{ color: 'white' }} onClick={handleLogout}>
                  Keluar
                </Link>
              ) : (
                <Link to="/login" className="nav-link" style={{ color: 'white' }}>
                  Masuk
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isLoggedIn ? (
        <div style={{
          backgroundImage: 'url("/images/f2.jpeg")',
          backgroundSize: 'cover',
        }}>
        <Container >
          <Switch>
            <Route path="/" exact>
              <h1 style={{color: 'white'}}>Toko Bunga</h1>
              <Row>
                {dataBunga.map((bunga) => (
                  <Col key={bunga.id} md={4} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + bunga.gambar}
                        alt={bunga.nama}
                      />
                      <Card.Body>
                        <Card.Title>{bunga.nama}</Card.Title>
                        <Card.Text>Harga: Rp.{bunga.harga}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => tambahKeKeranjang(bunga)}
                        >
                          Tambah ke Keranjang
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div style={{ backgroundImage:'url("/images/r1.jpeg")', color:'white'}}>
              <h2 className="mt-5" >Dompet</h2>
              <h1 >Rp.{saldoDompet}</h1>
              <Form>
                <Form.Group controlId="formDompet">
                  <Form.Label >Masukkan Jumlah Uang:</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Jumlah Uang"
                        value={inputDompet}
                        onChange={(e) => setInputDompet(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        onClick={() => setSaldoDompet(saldoDompet + parseFloat(inputDompet))}
                      >
                        Tambah Dompet
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
              <div style={{ backgroundImage:'url("/images/r3.jpeg")', color:'white'}}>
              <h2 className="mt-5" >Keranjang</h2>
              {keranjang.length === 0 ? (
                <p>Keranjang kosong</p>
              ) : (
                <>
                  <ul variant="success" >
                    {keranjang.map((item) => (
                      <li key={item.id}>{item.nama} - Rp.{item.harga}</li>
                    ))}
                  </ul>
                  <p >Total Harga: {totalHarga}</p>
                  <Button variant="success" onClick={prosesPembelian} style={{ backgroundColor: 'blue' }} expand="lg">
                    Beli
                  </Button>
                </>
              )}
              </div>
              </div>
              <div >
        <h2 className="mt-5" style={{ backgroundImage: 'url("/images/nino1.png")', backgroundSize: 'cover', height: '50px', textAlign: 'center', color: 'black' }}>
          whatsapp</h2>
        <h1  style={{ backgroundImage: 'url("/images/nino.png")', backgroundSize: 'cover', height: '400px', textAlign: 'center', color: 'white' }}>
          08813269081</h1>
      </div>

              
            </Route>
            <Route path="/informasi" component={Informasi} />
            <Route path="/akun" component={Akun} />
          </Switch>
        </Container>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      
    </Router>
  );
}

export default App;
