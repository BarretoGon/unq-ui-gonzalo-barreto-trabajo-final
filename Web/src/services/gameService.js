import axios from "axios";
import { errorMessage } from "../utilities/error_message";

import { API, ROUTES_API } from "../constants";


const api = axios.create({
  baseURL: API.BASE_URL,
});


const getGameSession = (difficultyId) =>
  api
    .get(`${ROUTES_API.DIFFICULTIES}/${difficultyId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


const checkWord = (answerBody) =>
  api
    .post(`${ROUTES_API.CHECKWORD}`, answerBody)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


export {
    getGameSession,
    checkWord,
};

