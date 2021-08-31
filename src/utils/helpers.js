import React from "react";

import axios from "axios";

export const makeApiCall = (method, url, head, par) => {
  let params = par ? par : {};
  let headers = head ? head : {};
  return axios({
    method: method,
    url: url,
    data: params,
    headers: headers,
  });
};
