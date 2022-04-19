import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'


// Passando propriedades para o componente

ReactDOM.render(
  <Hello name='Jansen' lastName='Lima'/>,
  document.getElementById('root')
);