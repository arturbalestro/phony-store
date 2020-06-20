import actionTypes from "../actions/types";
import update from "immutability-helper";

const reducer = (state, action) => {
  //Preventing lint error of state not previously declared
  if (typeof state === "undefined") {
    return 0;
  }

  if (action.type === actionTypes.ADD_USER) {
    return { ...state, loading: true, newUser: action.newUser };
  } else if (action.type === actionTypes.USER_ADDED) {
    //Updating state without modifying the original object
    const updatedState = update(state.users, { $push: [action.addedUser] });

    return { ...state, users: updatedState, loading: false };
  } else if (action.type === actionTypes.ADD_USER_FAILED) {
    return { ...state, loading: false };
  }

  //Updating state with the actions
  if (action.type === actionTypes.GET_PRODUCTS) {
    return { ...state, loading: true };
  } else if (action.type === actionTypes.PRODUCTS_RECEIVED) {
    return { ...state, products: action.products, loading: false };
  } else if (action.type === actionTypes.GET_PRODUCTS_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.ADD_PRODUCT) {
    return { ...state, loading: true, newProduct: action.newProduct };
  } else if (action.type === actionTypes.PRODUCT_ADDED) {
    //Updating state without modifying the original object
    // const updatedState = update(state.products, {
    //   $push: [action.addedProduct],
    // });

    alert(action.addedProduct);

    return { ...state, products: state.products, loading: false };
  } else if (action.type === actionTypes.ADD_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.EDIT_PRODUCT) {
    return {
      ...state,
      loading: true,
      productId: action.productId,
      newProduct: action.newProduct,
    };
  } else if (action.type === actionTypes.PRODUCT_EDITED) {
    //Updating state without modifying the original object
    //Removing the old object to add the new one to the array
    const updatedProducts = state.products.filter(
      (product) => product.id !== action.productId
    );
    const setProducts = update(state.products, { $set: updatedProducts });
    const updatedState = update(setProducts, { $push: [action.editedProduct] });

    return { ...state, products: updatedState, loading: false };
  } else if (action.type === actionTypes.EDIT_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.DELETE_PRODUCT) {
    return { ...state, loading: true, productId: action.productId };
  } else if (action.type === actionTypes.PRODUCT_DELETED) {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.deletedProduct.id
      ),
      loading: false,
    };
  } else if (action.type === actionTypes.DELETE_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }

  return state;
};
export default reducer;
