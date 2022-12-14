import React, {useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import UserContainer from "./UserContainer";
import PublicPlantContainer from "./PublicPlantContainer";
import NewPlantForm from "./NewPlantForm";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [plants, setPlants] = useState([])
  const [species, setSpecies] = useState([])
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [lastWatered, setLastWatered] = useState(new Date().toISOString().slice(0, 10))

  useEffect(() => {
    fetch("/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  },[])

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

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    }).then(() => {
      fetch(`/users/${currentUser.id}`)
     .then(res => {
        if(res.ok){
          res.json().then(user => {
              setCurrentUser(user)
            })
        }else {
            res.json().then(data => setErrors(data.error))
        }
    })
    })
  }, [plants, lastWatered]);

  function updateWater(updatewatered){ 
    const updatedwater = plants?.map((plant) => {
      if(plant.id === updatewatered.id){
          return (updatewatered)
      } else 
      return plant 
  })
  setPlants(updatedwater)
 }


      function addNewPlant(newPlantObj){ 
        setPlants([ ...newPlantObj]);
      }
      
      function addNewStore(newStoreObj){
        setStores(prev => [...prev, newStoreObj]);
      }
      
      function addNewSpecies(newSpeciesObj){
        setSpecies(prev => [...prev, newSpeciesObj]);
      }

      function deletePlant(deletedPlant){
        const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id);
        setPlants(updatedPlants)
      }

      const updateUser = (user) => setCurrentUser(user)

      const displayedPlants = plants?.filter((plant) => {
        return plant?.name?.toLowerCase().includes(search.toLowerCase())
      })
  return (
    <div className="App">
        <NavBar currentUser={currentUser} updateUser = {updateUser} />
        <Routes>
            <Route exact path="/" element={<PublicPlantContainer plants={displayedPlants} setSearch={setSearch}/>} />
            <Route path="/PlantContainer" element={<UserContainer user={currentUser} deletePlant = {deletePlant} setPlants={setPlants} plants={currentUser?.plants} errors={errors} lastWatered={lastWatered} updateWater={updateWater} />} />
            <Route path="/login" element={<Login updateUser={updateUser}/>} />
            <Route path="/signup" element={<Signup updateUser ={ updateUser} />} />
            <Route path="/NewPlantForm" element={<NewPlantForm user={currentUser} addNewPlant={addNewPlant} species={species} stores={stores} addNewStore={addNewStore} addNewSpecies={addNewSpecies}/>} />
        </Routes>
    </div>
  );
}

export default App;
