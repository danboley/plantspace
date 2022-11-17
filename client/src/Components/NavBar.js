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
            <NavLink className={"navbtn"} to = "/">Home</NavLink>
            {currentUser?<NavLink className={"navbtn"} to = "/PlantContainer">Your Plants</NavLink>:null}
            {currentUser?<NavLink className={"navbtn"} to = "/NewPlantForm">Add a New Plant</NavLink>:null}
            {!currentUser? <NavLink className={"navbtn"} to = "/login">Login/SignUp</NavLink>:
            <NavLink className={"navbtn"} to = "/" onClick={handleLogOut}>Log Out</NavLink>}
        </nav>
    )
}
export default NavBar;