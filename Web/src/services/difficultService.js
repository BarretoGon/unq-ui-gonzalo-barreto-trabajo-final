import axios from "axios";
import { errorMessage } from "../utilities/error_message";

import { API, ROUTES_API } from "../constants";


const api = axios.create({
  baseURL: API.BASE_URL,
});


const getDifficulties = () =>
  api
    .get(`${ROUTES_API.DIFFICULTIES}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


export {
    getDifficulties,
};
