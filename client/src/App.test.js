import React from "react";
import { Provider } from "react-redux";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { render } from "@testing-library/react";
import App from "./App";

//Enabling the use of generator functions
const sagaMiddleware = createSagaMiddleware();

//Creating the store and passing the reducers, middleware to use sagas and the console logger.
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

//Run the saga defined in sagas/index
sagaMiddleware.run(rootSaga);

test("Renders the Phony Store app", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});
