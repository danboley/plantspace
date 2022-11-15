import { NavLink } from "react-router-dom";

function NavBar (){
    return (
        <nav>
            <NavLink exact to = "/">Home</NavLink>
            <NavLink exact to = "/PlantContainer">Your Plants</NavLink>
            <NavLink exact to = "/NewPlantForm">Add a New Plant</NavLink>
            <NavLink exact to = "/login">Login/SignUp</NavLink>
        </nav>
    )
}
export default NavBar;