
function Clock(props) {
    return (
      <div>
        <h2>São exatamente: {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
}
export default Clock;