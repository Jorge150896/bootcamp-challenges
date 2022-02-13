import {
  SET_RESULTADO,
  SET_SUMA,
  SET_RESTA,
  SET_MULTIPLICACION,
  SET_DIVISION,
} from "../constants";

const resultado = (payload) => ({
  type: SET_RESULTADO,
  message: payload,
});

const suma = (payload) => ({
  type: SET_SUMA,
  message: payload,
});

const resta = (payload) => ({
  type: SET_RESTA,
  message: payload,
});

const multiplicacion = (payload) => ({
  type: SET_MULTIPLICACION,
  message: payload,
});

const division = (payload) => ({
  type: SET_DIVISION,
  message: payload,
});
