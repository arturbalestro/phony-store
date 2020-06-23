// @flow
import WarningModal from "../WarningModal";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

test("<WarningModal /> renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <WarningModal />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
