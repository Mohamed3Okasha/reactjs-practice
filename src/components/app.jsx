import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";

import NavBar from "./navbar";
import About from "./about";
import ShoppingCart from "./shoppingcart";
import Contact from "./contact";
import Home from "./home";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import Team from "./team";
import Company from "./company";
import Menu from "./menu";
import Login from "./login";
import Admin from "./admin";
import AddProduct from "./add-product";
import Founders from "./founders";
import { connect } from "react-redux";
import { changeLanguage } from "../store/actions/language";
class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    //call backend
    const { data } = await axios.get("http://localhost:3000/products/");
    console.log(data);
    //set state
    this.setState({ products: data });
    // console.log(data);
    // const promise = fetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(promise);
    // const result = promise.then(res => res.json());
    // result.then(data => console.log(data));
  }

  // async componentDidUpdate(){
  //     //call backend
  //     const {data} = await axios.get('http://localhost:3000/products/');
  //     console.log(data);
  //     //set state
  //     this.setState({products: data});
  //     // console.log(data);
  //     // const promise = fetch('https://jsonplaceholder.typicode.com/posts');
  //     // console.log(promise);
  //     // const result = promise.then(res => res.json());
  //     // result.then(data => console.log(data));
  // }

  // handleDelete = (passedProduct) => {
  //     //products.filter
  //     console.log(passedProduct);
  //     //clone, edit
  //     let cloneProducts = [...this.state.products];
  //     cloneProducts = cloneProducts.filter((p) => p.id != passedProduct.id);
  //     //change state
  //     this.setState({
  //         products: cloneProducts
  //     });
  // }

  handleReset = () => {
    let cloneProducts = [...this.state.products];
    cloneProducts = cloneProducts.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({
      product: cloneProducts,
    });
  };

  handleIncrement = (passedProduct) => {
    let cloneProducts = [...this.state.products];
    const i = cloneProducts.indexOf(passedProduct);
    cloneProducts[i] = { ...cloneProducts[i] };
    cloneProducts[i].count++;
    this.setState({
      products: cloneProducts,
    });
  };

  //handle select/delete
  handleSelect = (selectedProduct) => {
    let cloneProducts = [...this.state.products];
    const i = cloneProducts.indexOf(selectedProduct);
    cloneProducts[i] = { ...cloneProducts[i] };
    // if(cloneProducts[i].selected === false){
    //     cloneProducts[i].selected = true;
    // }
    // else{
    //     cloneProducts[i].selected = false;
    // }
    cloneProducts[i].isSelected = !cloneProducts[i].isSelected;
    this.setState({
      products: cloneProducts,
    });
  };

  handleCartDelete = (deletedProduct) => {
    let cloneProducts = [...this.state.products];
    const i = cloneProducts.indexOf(deletedProduct);
    cloneProducts[i] = { ...cloneProducts[i] };
    cloneProducts[i].isSelected = false;
    this.setState({
      products: cloneProducts,
    });
  };

  handlePermanentDelete = (deletedProduct) => {
    let cloneProducts = [...this.state.products];
    const i = cloneProducts.indexOf(deletedProduct);
    cloneProducts[i] = { ...cloneProducts[i] };
    cloneProducts[i].isDeleted = true;
    console.log(cloneProducts[i]);
    this.setState({
      products: cloneProducts,
    });
  };

  // handleAddEditProduct = async (id, product) => {
  //     //create object for new product
  //     // console.log('product', product);
  //     if(id === 'new'){
  //         const obj = {
  //             id: this.state.products.length + 1,
  //             name: product.name,
  //             count: 0,
  //             price: product.price,
  //             isSelected: false,
  //             isDeleted: false
  //         };
  //         await axios.post('http://localhost:3000/products/', obj)
  //     }
  //     else{
  //         const obj = {
  //             id: this.state.products.length + 1,
  //             name: product.name,
  //             count: 0,
  //             price: product.price,
  //             isSelected: false,
  //             isDeleted: false
  //         };
  //         await axios.put(`http://localhost:3000/products/${id}`, obj)
  //     }
  //     // console.log(this.history);
  //     this.props.history.replace('/admin');
  // }

  render() {
    // const
    return (
      <React.Fragment>
        <div
          dir={this.props.lang === "en" ? "ltr" : "rtl"}
          className={this.props.lang === "en" ? "text-left" : "text-right"}
        >
          <NavBar
            productCount={
              this.state.products.filter((p) => p.isSelected === true).length
            }
          />
          <main className="container">
            <Routes>
              <Route
                path="/add-product/:id"
                element={
                  <AddProduct
                    products={this.state.products}
                    onAdd={this.handleAddEditProduct}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <Admin
                    products={this.state.products}
                    onDelete={this.handlePermanentDelete}
                    onAdd={this.handleAddProduct}
                  />
                }
              />
              <Route
                path="/login"
                element={<Login onSubmit={this.handleSubmit} />}
              />
              <Route
                path="/menu"
                element={
                  <Menu
                    products={this.state.products}
                    onSelect={this.handleSelect}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/products/:id"
                element={<ProductDetails products={this.state.products} />}
              />
              <Route
                path="cart"
                element={
                  <ShoppingCart
                    products={this.state.products}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleCartDelete}
                    // {...props}
                  />
                }
              />
              <Route path="/about" element={<About />}>
                <Route path="/about/team" element={<Team />} />
                <Route path="/about/company" element={<Company />} />
                <Route path="/about/founders" element={<Founders />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Navigate to="/" />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang.currentLang,
  };
};
export default connect(mapStateToProps, { changeLanguage })(App);
