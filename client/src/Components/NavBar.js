import { NavLink } from "react-router-dom";

function NavBar (){
    return (
        <nav className="navigation">
            <NavLink className={"navbtn"} exact to = "/">Home</NavLink>
            <NavLink className={"navbtn"} exact to = "/PlantContainer">Your Plants</NavLink>
            <NavLink className={"navbtn"} exact to = "/NewPlantForm">Add a New Plant</NavLink>
            <NavLink className={"navbtn"} exact to = "/login">Login/SignUp</NavLink>
        </nav>
    )
}
export default NavBar;