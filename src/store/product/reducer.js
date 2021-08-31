import productActionTypes from "./actionTypes";

const INITIAL_STATE = {
  productData: null,
  hasErrored: null,
  isFetchingData: false,
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        hasErrored: null,
        isFetchingData: true,
      };
    case productActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productData: action.payload,
        hasErrored: null,
        isFetchingData: false,
      };

    case productActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        hasErrored: action.payload,
        isFetchingData: false,
      };

    default:
      return state;
  }
};

export default ProductReducer;
