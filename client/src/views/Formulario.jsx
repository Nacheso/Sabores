import axios from "axios";
import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    nick: "",
    telefono: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  axios
    .post(`http://localhost:5000/Api/PassRouter/signup`, { ...datos })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });

  return (
    <Fragment>
      <h1> ¡PASEN A TOMARSE ALGO! </h1>
      <form>
        <div>
          <label>SIEMPRE NOS GUSTA TUTEAR.</label>

          <input
            placeholder="Nombre..."
            name="nombre"
            onChange={handleSubmit}
          ></input>
        </div>

        <div>
          <label>MEJOR CON UN BUEN NICK.</label>

          <input
            placeholder="¿Un nombre secreto?"
            name="nick"
            onChange={handleSubmit}
          ></input>
        </div>

        <div>
          <label>TU TELÉFONO TENDRÁ UN NÚMERO...¿VERDAD?</label>

          <input
            placeholder="Teléfono... ¡Lo tienes en la mano!"
            name="telefono"
            onChange={handleSubmit}
          ></input>
        </div>

        <div>
          <label htmlFor="password">¡OJO! QUE NO SE BEBAN TU COPA.</label>

          <input
            placeholder="¡Alto! ¡Contraseña!"
            name="password"
            onChange={handleSubmit}
          ></input>
        </div>

        <div>
          <label htmlFor="email">¿CUENTA DE EMAIL?</label>

          <input
            placeholder="Email, que las palomas mensajeras ya están en desuso."
            name="email"
            onChange={handleSubmit}
          ></input>
        </div>

        <div>
          <button type="submit" onClick={Formulario}>Ya está todo. ¡BIENVENIDO!</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;

// post http://localhost:5000/Api/PassRouter/signup
