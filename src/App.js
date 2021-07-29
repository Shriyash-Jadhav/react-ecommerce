import React, { Fragment, useEffect } from "react";
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ProductList from './Components/ProductList';
import SingleProduct from './Components/SingleProduct';
import AddToCart from "./Components/AddToCart";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import { useStoreActions } from "easy-peasy";
function App() {
  const setCart = useStoreActions(actions => actions.setCart);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" exact component={ProductList} />
        <Route path="/home/:id" exact component={SingleProduct} />
        <Route path="/cart" exact component={AddToCart} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="*" exact component={NotFound} />

      </Switch>
    </BrowserRouter>


  );
}

export default App;
