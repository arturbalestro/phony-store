// @flow
import Options from "../Options";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

const mockedProduct = {
  name: "Sckhar",
  type: "Red",
  history: "The Red Product King of Arton",
};

test("<Options /> renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Options currentProduct={mockedProduct} />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
