import React from "react";
import { Route, Switch } from "react-router-dom";

import { StyledApp } from "./styles/StyledApp";
import { locales } from "./utils/locales";
import Header from "./components/atoms/Header/Header";
import Loader from "./components/atoms/Loader/Loader";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import ProductList from "./components/pages/ProductList/ProductList";

function App() {
  const currentUser = {
    email: sessionStorage.getItem("userEmail"),
    password: sessionStorage.getItem("userPassword"),
  };

  return (
    <StyledApp>
      <Header />
      <div className="main-container">
        <h1>
          {currentUser.email
            ? locales.welcomeText + currentUser.email
            : locales.mainTitle}
        </h1>
        <h4>{locales.mainSubTitle}</h4>
        <Switch>
          {currentUser.email && <Route path="/" exact component={Home} />}
          {!currentUser.email && <Route path="/" exact component={Login} />}
          <Route path="/products" component={ProductList} />
        </Switch>
      </div>
      <Loader />
    </StyledApp>
  );
}

export default App;
