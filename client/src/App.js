import React from "react";
import { Route, Switch } from "react-router-dom";

import { StyledApp } from "./styles/StyledApp";
import Header from "./components/atoms/Header/Header";
import Loader from "./components/atoms/Loader/Loader";
import Login from "./components/pages/Login/Login";
import ProductList from "./components/pages/ProductList/ProductList";

function App() {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" component={ProductList} />
      </Switch>
      <Loader />
    </StyledApp>
  );
}

export default App;
