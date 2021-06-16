import React, { useState } from 'react';

const Incrementar = () => {

    const [valor, setValor] = useState(0)

    const incrementar = () =>{
        setValor(valor+1)
    }

    const disminuir = () =>{
        setValor(valor-1)
        setValor(preValor => preValor-1)
    }

    return (    
        <div>
            <button onClick={incrementar}>
                Incrementa
            </button>
            <h1>
                Valor: {valor}
            </h1>
            <button onClick={() => disminuir()}>
                Quitar
            </button>
            <hr/>
        </div>
    )
}

export default Incrementar