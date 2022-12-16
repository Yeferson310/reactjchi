const Cards = (props) => {
    return (
    <div>
        <span> #{props.id} </span>
        <img src= {props.img}/>
        <h1>{props.name} </h1>
    </div>)
    } 

    export default Cards 