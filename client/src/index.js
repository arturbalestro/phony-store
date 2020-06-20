import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

//Enabling the use of generator functions
const sagaMiddleware = createSagaMiddleware();

//Creating the store and passing the reducers, middleware to use sagas and the console logger.
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

//Run the saga defined in sagas/index
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
