const Nav = (props) => {
const change = (e) => {

    console.log(e.target.value)
}


return (
<div>
    <div>
        <h1> Pokedex </h1>
        <img src=""/>
    </div>
    <div>
        <form action="#">
            <input value={props.search} onChange={change} type="search" />
        </form> 
    </div>
</div>

)

}

export default Nav 
