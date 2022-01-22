import axios from "axios";
import { setState } from "react";

const CrearUsuario = async () => {

    try {

        const [cliente] = setState(null);

        const params = new URLSearchParams();
        params.append('nombre', cliente.name); 
        params.append('nick', cliente.nick);
        params.append('telefono', cliente.telefono);
        params.append('password', cliente.password);
        params.append('email', cliente.email);

        console.log(...params);

        const response = await axios({
            method: 'post',
            url: "http://localhost:5000/Api/PassRouter/signup",
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU2MzQzNjgxZWQzMjQyYTYyNGM4OCIsImlhdCI6MTYzNzUzNjQ3NSwiZXhwIjoxNjM3NjIyODc1fQ.M56p1zjD1sBN5MLwfklXM0wrV3BaHZ4-2wJ8uGjY2IU',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: params.toString()
        })

        console.log(response);

    } catch (err) {
        console.log(err);
    };
}

export default CrearUsuario;