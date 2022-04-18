import React from 'react'
import ReactDOM from 'react-dom'


// Introdução ao JSX

const element = <h1>Hello world, {formatName('Jansen', 'Lima')}!</h1>;

function formatName(n, ln) {
  const name = n;
  const lastName = ln;
  return <b>{name} {lastName}</b>
}

ReactDOM.render(
  element,
  document.getElementById('root')
);