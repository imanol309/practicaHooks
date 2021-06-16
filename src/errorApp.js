import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");

  return (
    <div>
      <button onClick={() => setError("Error del software")}>
        Primer error
      </button>
      <button onClick={() => setError("Error del hardware")}>
        segundo error
      </button>
      <button onClick={() => setError("")}>Solucion</button>
      {error && <h1>{error}</h1>}
      <hr/>
    </div>
  );
};

export default ErrorApp;
