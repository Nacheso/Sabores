// Codigo con errores para formulario:

import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
  
    if (!values.nombre) {
      errors.nombre = "Required";
    } else if (values.nombre.length > 20) {
      errors.name = "Sobran letras... menos de 20, ¡Por favor!";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 10) {
      errors.password = "¡El password más corto que se me olvida!";
    }
  
    return errors;
  };