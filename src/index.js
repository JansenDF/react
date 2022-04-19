import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'


// Passando propriedades para o componente

ReactDOM.render(
  <div>
    <Hello name='Jansen' lastName='Lima'/>
    <Hello name='Daniele' lastName='Dias'/>
    <Hello name='Lucas' lastName='Lima'/>
  </div>,
  document.getElementById('root')
);