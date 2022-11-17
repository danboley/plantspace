import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function NewPlantForm ({addNewPlant, addNewStore, addNewSpecies, stores, species, user}){
    const [newPlantName, setNewPlantName] = useState("")
    const [newPicture, setNewPicture] = useState("")
    const [newStore, setNewStore] = useState("")
    const [newStoreName, setNewStoreName] = useState("")
    const [newStoreLocation, setNewStoreLocation] = useState("")
    const [newStoreUrl, setNewStoreUrl] = useState("")
    const [newSpecies, setNewSpecies] = useState("")
    const [newSpeciesName, setNewSpeciesName] = useState("")
    const [newSpeciesWatered, setNewSpeciesWatered] = useState("")
    const [newSpeciesCare, setNewSpeciesCare] = useState("")
    const [newWaterTime, setNewWaterTime] = useState(new Date())
    const [expandSpecies, setExpandSpecies] = useState(false)
    const [expandStore, setExpandStore] = useState(false)
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();

    function expandFormSpecies(){
        setExpandSpecies(prev => !prev)
    }

    function expandFormStore(){
        setExpandStore(prev => !prev)
    }

    function handleStore(e){
        e.preventDefault()
        const newStoreObj= {
            name: newStoreName,
            location: newStoreLocation,
            store_url: newStoreUrl,
        }
        fetch(`/stores`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStoreObj)
        }).then((r) => {
            console.log(r)
            if (r.ok) {
              r.json().then((data) => {
               addNewStore(data)
               
          });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    function handleSpecies(e){
        e.preventDefault()
        const newSpeciesObj= {
            species_name: newSpeciesName,
            frequency_watered: parseInt(newSpeciesWatered),
            care: newSpeciesCare,
        }
        fetch(`/species`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSpeciesObj)
        }).then((r) => {
            if (r.ok) {
              r.json().then((data) => {
               addNewSpecies(data)
                
          });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const newPlantObj= {
            name: newPlantName,
            picture_url: newPicture,
            user_id: parseInt(user.id),
            store_id: parseInt(newStore),
            species_id: parseInt(newSpecies),
            last_watered: newWaterTime,
        }
        fetch(`/plants`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlantObj)
        }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
               addNewPlant(user)
               navigate(`/PlantContainer`)
          });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        })
    }
    return (
        <div className='form-container'>
            <h1>Create Your Plant</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Name of Plant..." 
                value={newPlantName} 
                onChange={(e) => setNewPlantName(e.target.value)}/>
                <input 
                type="text" 
                placeholder="URL for Plant Photo..." 
                value={newPicture} 
                onChange={(e) => setNewPicture(e.target.value)}/>

                <label htmlFor='storeDropdown'>Store: </label>
                 <select className = "dropdown" id="storeId" name="storeDropdown" onChange={(e)=>{setNewStore(e.target.value)}}>
                    <option value=""> Select...</option>
                    {stores.map((store) => {
                        return <option key={store.id} value={store.id}>{store.name}</option>
                        })}
                 </select>


                <label htmlFor='speciesDropdown'>Species: </label>
                 <select className = "dropdown" id="speciesId" name="speciesDropdown" onChange={(e)=>{setNewSpecies(e.target.value)}}>
                    <option value=""> Select...</option>
                    {species.map((specie) => {
                        return <option key={specie.id} value={specie.id}>{specie.species_name}</option>
                        })}
                 </select>

                <input 
                type="date" 
                placeholder="Last Time Your Plant Was Watered..." 
                value={newWaterTime} 
                onChange={(e) => setNewWaterTime(e.target.value)}/>
                <button type='submit' className='submitButton'>Add Your Plant</button>
            </form>
            {errors? <div>{errors}</div>:null} 
            </div>    

                <button onClick={expandFormSpecies}>Species</button>
                 {expandSpecies && 
                    <div onSubmit={handleSpecies}>
                        <h4>Add a new Species</h4>
                        <form className="form-input">
                            <input
                            type="text" 
                            placeholder="Name of Species..." 
                            value={newSpeciesName} 
                            onChange={(e) => setNewSpeciesName(e.target.value)}/>
                            <input
                            type="text" 
                            placeholder="Level Of Water Needed Out Of 10..." 
                            value={newSpeciesWatered} 
                            onChange={(e) => setNewSpeciesWatered(e.target.value)}/>
                            <input
                            type="text" 
                            placeholder="What Care Does It Need..." 
                            value={newSpeciesCare} 
                            onChange={(e) => setNewSpeciesCare(e.target.value)}/>
                            <button type='submit' className='submitButton'>Add Your Species</button>
                        </form>
                    </div>
                 }  
                <button onClick={expandFormStore}>Store</button>
                 {expandStore && 
                    <div onSubmit={handleStore}>
                        <h4>Add a new Store</h4>
                        <form className="form-input">
                            <input
                                type="text" 
                                placeholder="Name of Store..." 
                                value={newStoreName} 
                                onChange={(e) => setNewStoreName(e.target.value)}/>
                                <input
                                type="text" 
                                placeholder="Store Location..." 
                                value={newStoreLocation} 
                                onChange={(e) => setNewStoreLocation(e.target.value)}/>
                                <input
                                type="text" 
                                placeholder="Store Website..." 
                                value={newStoreUrl} 
                                onChange={(e) => setNewStoreUrl(e.target.value)}/>
                                <button type='submit' className='submitButton'>Add Your Store</button>
                        </form>
                        
                    </div>
                 }        
        </div>
    )
}
export default NewPlantForm;