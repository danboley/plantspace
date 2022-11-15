import React, {useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import PlantContainer from "./PlantContainer";
import Home from "./Home";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Login from "./Login";


function App() {
    const [plant, setPlant] = useState([])
    const [store, setStore] = useState([])
    const [species, setSpecies] = useState([])

    useEffect(() => {
        fetch("/plants")
        .then((res) => res.json())
        .then((data) => setPlant(data))
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
        setPlant(prev => [...prev, newPlantObj])
      }

      function deletePlant(deletedPlant){
        const updatedPlants = plant.filter((plants) => plants.id !== deletedPlant.id);
        setPlant(updatedPlants)
      }

  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/PlantContainer" element={<PlantContainer plants={plant} deletePlant = {deletePlant} />} />
            <Route path="/NewPlantForm" element={<NewPlantForm addNewPlant={addNewPlant} />} />
        </Routes>
    </div>
  );
}

export default App;
