import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import "./operationsView.scss";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      //   main: purple[500],
      main: blue[700],
    },
  },
});
const OperationsView = () => {
  const [form, setForm] = useState({ temperaturaOne: 0, temperaturaTwo: 32 });
  const [converter, setConverter] = React.useState("");
  const [converter2, setConverter2] = React.useState("");

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (converter == 10) {
      // (0 °C × 9/5) + 32 = 32 °F
      setForm({ ...form, temperaturaTwo: (form.temperaturaOne * 9) / 5 + 32 });
    }
    if (converter == 20) {
      // (0 °F − 32) × 5/9 = -17.78 °C

      setForm({
        ...form,
        temperaturaTwo: ((form.temperaturaOne - 32) * 5) / 9,
      });
    }
  }, [form.temperaturaOne, form.temperaturaTwo]);

  const handleChange = (event) => {
    setConverter(event.target.value);
    if (event.target.value == 10) {
      // (0 °C × 9/5) + 32 = 32 °F
      setForm({ ...form, temperaturaTwo: (form.temperaturaOne * 9) / 5 + 32 });
      setConverter2(20);
    }
    if (event.target.value == 20) {
      // (0 °F − 32) × 5/9 = -17.78 °C
      setConverter2(10);

      setForm({
        ...form,
        temperaturaTwo: ((form.temperaturaOne - 32) * 5) / 9,
      });
    }
  };
  const handleChange2 = (event) => {
    setConverter2(event.target.value);
    if (event.target.value == 10) {
      // (0 °C × 9/5) + 32 = 32 °F
      setForm({
        ...form,
        // temperaturaOne: ((form.temperaturaTwo - 32) * 5) / 9,
        temperaturaTwo: ((form.temperaturaOne - 32) * 5) / 9,
      });
      setConverter(20);
    }
    if (event.target.value == 20) {
      // (0 °F − 32) × 5/9 = -17.78 °C
      setConverter(10);
      // setForm({ ...form, temperaturaOne: (form.temperaturaTwo * 9) / 5 + 32 });

      setForm({ ...form, temperaturaTwo: (form.temperaturaOne * 9) / 5 + 32 });
    }
  };
  return (
    <form className="row operations">
      <div className="row operations__title">Convertidor de Temperatura</div>
      <div className="row operations__descripcion">
        Replica el mismo funcionamiento que el convertido de Temperatura de
        Google, al seleccionar una de las opciones del dropdown realiza el
        calculo, o al modificar el valor del 1er input .
      </div>

      <div className="col col-5 operations__left">
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label=" "
            variant="outlined"
            name="temperaturaOne"
            type="number"
            className="col col-12 operations__left__valor mb-4"
            value={form.temperaturaOne}
            placeholder="Ingresa la temperatura a convertir"
            focused
            onChange={handleForm}
          />

          <Select
            value={converter}
            // defaultValue={0}
            label="Converter"
            className="col col-12  operations__left__converter"
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Grado Celcius</MenuItem>
            <MenuItem value={20}>Grado Fahrenheit</MenuItem>
          </Select>
        </ThemeProvider>
      </div>
      <p className="col col-2 operations__center">=</p>
      <div className="col col-5 operations__right">
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label=" "
            variant="outlined"
            name="temperaturaTwo"
            type="number"
            className="col col-12 operations__right__valor mb-4"
            value={form.temperaturaTwo}
            placeholder="Ingresa la temperatura a convertir"
            focused
            onChange={handleForm}
          />

          <Select
            value={converter2}
            // defaultValue={0}
            label="Converter"
            className="col col-12  operations__right__converter"
            onChange={handleChange2}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Grado Celcius</MenuItem>
            <MenuItem value={20}>Grado Fahrenheit</MenuItem>
          </Select>
        </ThemeProvider>
      </div>
    </form>
  );
};

export default OperationsView;
