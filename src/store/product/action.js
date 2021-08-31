import { makeApiCall } from "../../utils/helpers";
import productActionTypes from "./actionTypes";

//  Action Creators
// ================

const fetchProductStart = () => ({
  type: productActionTypes.FETCH_PRODUCTS_START,
});

const fetchProductSuccess = (data) => ({
  type: productActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

const fetchProductFailure = (error) => ({
  type: productActionTypes.FETCH_PRODUCTS_FAILURE,
});

export const fetchNewReleaseFromElasticAsync = () => {
  console.log("new release api call start...............");
  return (dispatch) => {
    dispatch(fetchProductStart());
    const url = process.env.REACT_APP_BASE_URL + "/api/products";

    const headers = {
      Authorization: "ApiKey " + process.env.REACT_APP_ELASTICSEARCH_API_KEY,
    };
    makeApiCall("post", url, headers)
      .then((res) => {
        if (res.data) {
          dispatch(fetchProductSuccess(res.data));
        }
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message));
      });
  };
};
