import React, { Component } from "react";
import Product from "../components/product";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("Shopping Cart ===> Constructor()");
  }

  componentDidMount() {
    //for calling backend server - AJAX code
    console.log("Shopping Cart ===> componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState) {
    //for comparing previous and courrent porps & state
    console.log("Shopping Cart ===> componentDidUpdate()");
  }

  render() {
    ///second in component lifecycle, including the render of its children
    console.log("Shopping Cart ===> render()");
    // console.log(this.props.products);
    return (
      <React.Fragment>
        <h3>Shopping Cart</h3>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.products
          .filter((p) => p.isSelected === true)
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
