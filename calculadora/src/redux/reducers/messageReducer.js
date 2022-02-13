import {
  SET_RESULTADO,
  SET_SUMA,
  SET_RESTA,
  SET_MULTIPLICACION,
  SET_DIVISION,
} from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  console.log("reducer  ", action);
  switch (action.type) {
    case SET_RESULTADO:
      return {
        resultado: action.payload,
      };
    case SET_SUMA:
      return {
        suma: action.payload,
      };
    case SET_RESTA:
      return {
        resta: action.payload,
      };
    case SET_MULTIPLICACION:
      return {
        multiplicacion: action.payload,
      };
    case SET_DIVISION:
      return {
        division: action.payload,
      };
    default:
      return state;
  }
}
