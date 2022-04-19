
function Hello(props){
    const element = (
        <div>
            <h1>Hello world, {formatName(props.name, props.lastName)}!</h1>
        </div>
    );
    function formatName(n, ln) {
        const name = n;
        const lastName = ln;
        return <b>{name} {lastName}</b>
        }
    return element;
}
export default Hello;