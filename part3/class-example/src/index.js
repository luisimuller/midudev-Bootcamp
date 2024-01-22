import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = (props) => {
  const contador = useState(0)

  const contadorValue=contador[0];
  const updateContador=contador[1];

  setInterval(() => {
    updateContador(contadorValue+1)
    
  }, 2000);

  return(
    <div>
      <p>El valor del contador es:</p>
    <h1>{contadorValue}</h1>
    <h2>La magia de React. Solo se recarga el contador </h2>
  </div>
  ) ;
};



  root.render(
    <App  />
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
