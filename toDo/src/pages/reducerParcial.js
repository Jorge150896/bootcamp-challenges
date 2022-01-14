import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const ACTIONS = {
  CARGAR_TAREAS: "upload-todos",
  CREAR_TAREA: "create-todo",
  TOGGLE_TAREA: "toggle-tarea",
  DELETE_TAREA: "delete-tarea",
  UPDATE_TAREA: "update-tarea",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return tareas;
    case ACTIONS.CREAR_TAREA:
      return [...state, crearTodo(action.payload.tarea)];
    case ACTIONS.TOGGLE_TAREA:
      return toggleTodo(state, action.payload.id);
    case ACTIONS.DELETE_TAREA:
      return deleteTodo(state, action.payload.id);
    case ACTIONS.UPDATE_TAREA:
      return updateTodo(state, action.payload.nuevaTarea);
    default:
      return state;
  }
}

function crearTodo(tarea) {
  return {
    id: Math.floor(Math.random() * 100),
    titulo: tarea,
    completado: false,
  };
}

function toggleTodo(state, id) {
  return state.map((tarea) => {
    return tarea.id === id
      ? { ...tarea, completado: !tarea.completado }
      : tarea;
  });
}
function deleteTodo(state, id) {
  return state.filter((tarea) => {
    return tarea.id !== id;
  });
}

function updateTodo(state, nuevaTarea) {
  return state.map((tarea) => {
    return tarea.id === nuevaTarea.id
      ? {
          id: nuevaTarea.id,
          titulo: nuevaTarea.titulo,
          completado: nuevaTarea.completado,
        }
      : tarea;
  });
}

export default function Principal() {
  // Estados del componente
  // const [listaTareas, setListaTareas] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  // Ciclo de vida con hook useEffect
  useEffect(() => {
    dispatch({ type: ACTIONS.CARGAR_TAREAS });
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    dispatch({ type: ACTIONS.CREAR_TAREA, payload: { tarea } });
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TAREA, payload: { id } });
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    dispatch({ type: ACTIONS.UPDATE_TAREA, payload: { nuevaTarea } });
    setEditable(null);
    console.log(nuevaTarea);

    // const nuevaLista = listaTareas.map((tarea) =>
    //   tarea.id === nuevaTarea.id
    //     ? {
    //         id: nuevaTarea.id,
    //         titulo: nuevaTarea.titulo,
    //         completado: nuevaTarea.completado,
    //       }
    //     : tarea
    // );
    // setListaTareas(nuevaLista);
    // setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    dispatch({ type: ACTIONS.DELETE_TAREA, payload: { id } });

    // const nuevaLista = listaTareas
    //   .map((tarea) => (tarea.id === id ? null : tarea))
    //   .filter((tarea) => tarea != null);
    // setListaTareas(nuevaLista);
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          listaTareas={state}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}
