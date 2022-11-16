import { NavLink } from "react-router-dom";

function NavBar ({currentUser, updateUser}){

    const handleLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            updateUser(false)
          }
        })
      }

    return (
        <nav className="navigation">
            <NavLink className={"navbtn"} exact to = "/">Home</NavLink>
            <NavLink className={"navbtn"} exact to = "/PlantContainer">Your Plants</NavLink>
            <NavLink className={"navbtn"} exact to = "/NewPlantForm">Add a New Plant</NavLink>
            {!currentUser? <NavLink className={"navbtn"} exact to = "/login">Login/SignUp</NavLink>:
            <NavLink className={"navbtn"} exact to = "/" onClick={handleLogOut}>Log Out</NavLink>}
        </nav>
    )
}
export default NavBar;