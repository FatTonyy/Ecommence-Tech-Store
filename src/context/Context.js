import React, { Component } from "react";
import { linkData } from "./linkData";

const ProductContext = React.createContext();

// !Provider

//!Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    cart: [],
    links: linkData
  };

  // Handle Sidebar

  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //handle cart

  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  // close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  //Open Cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    // TODO: note you can pass the value as an object
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
