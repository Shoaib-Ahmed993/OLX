import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header'
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import Footer from './components/Footer'

function RouteConfig() {

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={ProductItem} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default RouteConfig;

