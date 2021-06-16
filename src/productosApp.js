import React, { useState } from "react";

const ProductosApp = () => {
  const ValorFormulario = {
    title: "Cuaderno",
    description: "Es de color verde este color",
  };

  const [valor, setValor] = useState(ValorFormulario);
  

  const cambiarValor = () => {
    setValor({
      ...valor,
      title: "Perro pequeño",
      description: "Los perros pequeño son mas tranquilos",
    });
  };


  const valorInicial = () => {
    setValor(ValorFormulario);
  };


  const valorProps = (property, value) => {
        setValor({
            ...valor,
            [property]: value
        })
  }
  
  return (
    <div>
      <button onClick={cambiarValor}>Cambiar Valor</button>
      <button onClick={() => valorProps('gato', 'los gatos son mas dificil de jugar')}>Valor pasado por PROPS</button>
      <h1>{valor.title}</h1>
      <h1>{valor.description}</h1>
      <button onClick={valorInicial}>Valor Original</button>
      <hr />
    </div>
  );
};

export default ProductosApp;
