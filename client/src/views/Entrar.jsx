import axios from "axios";

const login = async(event) =>{
    event.preventDefault();
    var data=new FormData();

    for(var key in datos){
        if(datos[key]){
            data.append(key, datos[key]);
        }
    }

    try {
        let response=await axios.post("http://localhost:5000/Api/PassRouter/signup", data, {
        headers: {
            "Content-Type":"multipar/form-data",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU2MzQzNjgxZWQzMjQyYTYyNGM4OCIsImlhdCI6MTYzNzUzNjQ3NSwiZXhwIjoxNjM3NjIyODc1fQ.M56p1zjD1sBN5MLwfklXM0wrV3BaHZ4-2wJ8uGjY2IU"
        },
    });

    return (
        <Fragment>
          <h1> ¡PASEN A TOMARSE ALGO! </h1>
          <form>
            <div>
              <p></p>
              <label>SIEMPRE NOS GUSTA TUTEAR.</label>
              <p></p>
              <input
                placeholder="Nombre..."
                name="nombre"
                onChange={handleInputChange}
              ></input>
              <p></p>
            </div>
            <p></p>
            <div>
              <p></p>
              <label>MEJOR CON UN BUEN NICK.</label>
              <p></p>
              <input
                placeholder="¿Un nombre secreto?"
                name="nick"
                onChange={handleInputChange}
              ></input>
              <p></p>
            </div>
            <p></p>
            <div>
              <p></p>
              <label>TU TELÉFONO TENDRÁ UN NÚMERO...¿VERDAD?</label>
              <p></p>
              <input
                placeholder="Teléfono... ¡Lo tienes en la mano!"
                name="telefono"
                onChange={handleInputChange}
              ></input>
              <p></p>
            </div>
            <p></p>
            <div>
              <p></p>
              <label htmlFor="password">¡OJO! QUE NO SE BEBAN TU COPA.</label>
              <p></p>
              <input
                placeholder="¡Alto! ¡Contraseña!"
                name="password"
                onChange={handleInputChange}
              ></input>
              <p></p>
            </div>
            <p></p>
            <div>
              <p></p>
              <label htmlFor="email">¿CUENTA DE EMAIL?</label>
              <p></p>
              <input
                placeholder="Email, que las palomas mensajeras ya están en desuso."
                name="email"
                onChange={handleInputChange}
              ></input>
              <p></p>
            </div>
            <p></p>
            <div>
              <p></p>
              <button type="submit">Ya está todo. ¡BIENVENIDO!</button>
            </div>
            <p></p>
          </form>
        </Fragment>
      );
    };
    
    export default Formulario;
