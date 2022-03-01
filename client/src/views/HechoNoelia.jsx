import React, { useState, useEffect } from "react";
import axios from "axios";

const HechoNoelia = () => {
  const [categoria1, setCategoria1] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(
          "http://localhost:5000/Api/CategoriaRouter"
        );
        console.log(response);
        setCategoria1(response.data.categorias);

      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const pintarPrimeraOpcion = () => {
    console.log(categoria1);

    return(
         categoria1.map((cat) => {
            return(
                <div key={cat._id}>
                    {cat.name}
                </div>
            )
        })
    )
  };

  return <div> {categoria1 ? pintarPrimeraOpcion() : "loading..."}</div>;
};

export default HechoNoelia;
