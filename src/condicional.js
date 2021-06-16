import React, { useState } from "react";

const Condicional = () => {
  const [Condicional, setCondicional] = useState(true);

  return (
    <div>
        <button onClick={() => setCondicional(!Condicional)}>  
            Cambiar 
        </button>
        {
            Condicional
            ? <h1>Es {Condicional.toString()}</h1>
            : <h1>Es {Condicional.toString()}</h1>
        }
        <hr/>
    </div>
  )
};

export default Condicional;
