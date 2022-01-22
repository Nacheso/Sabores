import React, { useEffect, useState } from "react";
import axios from "axios";

const Cocteles = () => {
  const [mix, setMix] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("http://localhost:5000/Api/CoctelesRouter");
        console.log(response.data);
        setMix(response.data.cocteles);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>TODOS LOS COCTELES</h2>
      <p>¡QUE QUIERES TOMAR!</p>
      {mix.map((coctel, i) => {
        return <Cocteles key={i} coctel={coctel} />;
      })}
    </div>
  );
};

export default Cocteles;