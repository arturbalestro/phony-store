import actionTypes from "../actions/types";

const reducer = (state, action) => {
  //Preventing lint error of state not previously declared
  if (typeof state === "undefined") {
    return 0;
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
    const warningModalState = {
      modalOpen: true,
      actionType: "Adding product",
      modalMessage: action.addedProduct,
    };

    return {
      ...state,
      products: state.products,
      loading: false,
      warningModal: warningModalState,
    };
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
    const warningModalState = {
      modalOpen: true,
      actionType: "Editing product",
      modalMessage: action.editedProduct,
    };

    return {
      ...state,
      products: state.products,
      loading: false,
      warningModal: warningModalState,
    };
  } else if (action.type === actionTypes.EDIT_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.DELETE_PRODUCT) {
    return { ...state, loading: true, product: action.product };
  } else if (action.type === actionTypes.PRODUCT_DELETED) {
    const warningModalState = {
      modalOpen: true,
      actionType: "Deleting product",
      modalMessage: action.deletedProduct,
    };

    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.deletedProduct.id
      ),
      loading: false,
      warningModal: warningModalState,
    };
  } else if (action.type === actionTypes.DELETE_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }

  return state;
};
export default reducer;
