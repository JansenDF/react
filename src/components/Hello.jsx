
function Hello(props){
    const element = (
        <div>
            <HelloWorld name={props.name} lastName={props.lastName}/>
        </div>
    );
    function formatName(n, ln) {
        const name = n;
        const lastName = ln;
        return <b>{name} {lastName}</b>
    }

    function HelloWorld(props){
        return (
            <h1>Hello world, {formatName(props.name, props.lastName)}!</h1>
        );
    }

    return element;
}
export default Hello;