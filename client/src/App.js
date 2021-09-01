import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';

function App(products) {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
