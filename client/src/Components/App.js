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
  const [species, setSpecies] = useState([])
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  },[stores,species])

  useEffect(() => {
    fetch("/species")
    .then((res) => res.json())
    .then((data) => setSpecies(data))
  },[])

  useEffect(() => {
    fetch("/stores")
    .then((res) => res.json())
    .then((data) => setStores(data))
  },[])

      function addNewPlant(newPlantObj){
        setPlants(prev => [...prev, newPlantObj])
      }
      
      function addNewStore(newStoreObj){
        setStores(prev => [...prev, newStoreObj])
      }
      
      function addNewSpecies(newSpeciesObj){
        setSpecies(prev => [...prev, newSpeciesObj])
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
        <NavBar currentUser={currentUser} updateUser = {updateUser} />
        <Routes>
            <Route exact path="/" element={<PublicPlantContainer plants={displayedPlants} setSearch={setSearch}/>} />
            <Route path="/PlantContainer" element={<UserContainer user={currentUser} deletePlant = {deletePlant}/>} />
            <Route exact path="/login" element={<Login updateUser={updateUser}/>} />
            <Route exact path="/signup" element={<Signup updateUser ={ updateUser} />} />
            <Route path="/NewPlantForm" element={<NewPlantForm addNewPlant={addNewPlant} species={species} stores={stores} addNewStore={addNewStore} addNewSpecies={addNewSpecies}/>} />
        </Routes>
    </div>
  );
}

export default App;
