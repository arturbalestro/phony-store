import { put, takeLatest, all } from "redux-saga/effects";
import actionTypes from "../actions/types";
import axios from "axios";

const productsAPI = "https://desafio-apirest-produtos.herokuapp.com/api/";

//Generator function to fetch data from the API and send the result to the PRODUCTS_RECEIVED action.
function* fetchProducts() {
  try {
    const products = yield fetch(productsAPI + "produtos").then((response) =>
      response.json()
    );

    //when the data is received, return the action result;
    yield put({ type: actionTypes.PRODUCTS_RECEIVED, products });
  } catch (error) {
    yield put({ type: actionTypes.GET_PRODUCTS_FAILED, error });
  }
}

function* addProduct(action) {
  try {
    const addedProduct = yield axios
      .post(productsAPI + "produto", action.newProduct)
      .then((response) => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.PRODUCT_ADDED, addedProduct });
  } catch (error) {
    yield put({ type: actionTypes.ADD_PRODUCT_FAILED, error });
  }
}

function* editProduct(action) {
  try {
    const editedProduct = yield axios
      .put(productsAPI + "produto", action.newProduct)
      .then((response) => response.data);

    //when the data is received, return the action result;
    yield put({
      type: actionTypes.PRODUCT_EDITED,
      productId: action.productId,
      editedProduct,
    });
  } catch (error) {
    yield put({ type: actionTypes.EDIT_PRODUCT_FAILED, error });
  }
}

function* deleteProduct(action) {
  try {
    const deletedProduct = yield axios
      .delete(productsAPI + "produto", { data: action.product })
      .then((response) => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.PRODUCT_DELETED, deletedProduct });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_PRODUCT_FAILED, error });
  }
}

//Generator function to wait for the GET_PRODUCTS to finish before triggering the other action.
function* actionWatcher() {
  yield takeLatest(actionTypes.GET_PRODUCTS, fetchProducts);
  yield takeLatest(actionTypes.ADD_PRODUCT, addProduct);
  yield takeLatest(actionTypes.EDIT_PRODUCT, editProduct);
  yield takeLatest(actionTypes.DELETE_PRODUCT, deleteProduct);
}

//Return the root saga with the sequence of actions
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
