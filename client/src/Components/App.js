import React, {useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import PlantContainer from "./PlantContainer";
import Home from "./Home";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Login from "./Login";


function App() {
  const [plants, setPlants] = useState([])
  const [store, setStore] = useState([])
  const [species, setSpecies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  },[])

  useEffect(() => {
    fetch("/stores")
    .then((res) => res.json())
    .then((data) => setStore(data))
  },[])

  useEffect(() => {
    fetch("/species")
    .then((res) => res.json())
    .then((data) => setSpecies(data))
  },[])

      function addNewPlant(newPlantObj){
        setPlants(prev => [...prev, newPlantObj])
      }

      function deletePlant(deletedPlant){
        const updatedPlants = plants.filter((plants) => plants.id !== deletedPlant.id);
        setPlants(updatedPlants)
      }

      const displayedPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/PlantContainer" element={<PlantContainer plants={displayedPlants} deletePlant = {deletePlant} setSearch={setSearch} />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/NewPlantForm" element={<NewPlantForm addNewPlant={addNewPlant} />} />
        </Routes>
    </div>
  );
}

export default App;
