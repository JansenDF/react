
// function Clock(props) {
//     return (
//       <div>
//         <h2>São exatamente: {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }
// export default Clock;

// Transformando a função acima em uma Classe

import React from "react";

class Clock extends React.Component {
  render(){
    return (
      <div>
        <h2>São exatamente: {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;