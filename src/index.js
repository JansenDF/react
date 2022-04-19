import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import Clock from './components/Clock'


// Passando propriedades para o componente

ReactDOM.render(
  <div>
    <Hello name='Jansen' lastName='Lima'/>
    <Hello name='Daniele' lastName='Dias'/>
    <Hello name='Lucas' lastName='Lima'/>
    <Clock date={new Date()}/>
  </div>,
  document.getElementById('root')
);
