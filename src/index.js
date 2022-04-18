import React from 'react'
import ReactDOM from 'react-dom'


// Atualizando o elemento Renderizado

function tick(){

  const element = (
    <div>
      <h1>Hello world, {formatName('Jansen', 'Lima')}!</h1>
      <h2>Horário local: {new Date().toLocaleTimeString()}.</h2>  
    </div>
  );
  
  function formatName(n, ln) {
    const name = n;
    const lastName = ln;
    return <b>{name} {lastName}</b>
  }
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

}

setInterval(tick, 1000)