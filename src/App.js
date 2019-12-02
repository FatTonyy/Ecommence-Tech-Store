import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import Product from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import About from "./pages/AboutPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideCart from "./components/SideCart";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
