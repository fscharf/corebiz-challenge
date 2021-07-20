import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
});
