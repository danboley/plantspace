import React, {useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import UserContainer from "./UserContainer";
import PublicPlantContainer from "./PublicPlantContainer";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  },[])

      function addNewPlant(newPlantObj){
        setPlants(prev => [...prev, newPlantObj])
      }

      function deletePlant(deletedPlant){
        const updatedPlants = plants.filter((plants) => plants.id !== deletedPlant.id);
        setPlants(updatedPlants)
      }

      const updateUser = (user) => setCurrentUser(user)

      const displayedPlants = plants.filter((plant) => {
        return plant.name?.toLowerCase().includes(search.toLowerCase())
      })

  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<PublicPlantContainer/>} />
            <Route path="/PlantContainer" element={<UserContainer plants={displayedPlants} deletePlant = {deletePlant} setSearch={setSearch} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup updateUser ={ updateUser} />} />
            <Route path="/NewPlantForm" element={<NewPlantForm addNewPlant={addNewPlant} />} />
        </Routes>
    </div>
  );
}

export default App;
