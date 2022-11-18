import { useState } from "react"

function PrivatePlantCard ({plant, deletePlant, setPlants}){
    const [lastWatered, setLastWatered] = useState(new Date().toISOString().slice(0, 10))

    function updateWater(updatewatered){ 
         if(plant.id === updatewatered.id){
            setLastWatered(new Date().toISOString().slice(0, 10))
            return setPlants(updatewatered)
        } else 
        return plant
     }
     
        let d1 = new Date(lastWatered)
        // replace last_watered with frequency_watered
        let d2 = new Date(plant.last_watered)
        let time = Math.abs(d1 - d2)
        let daysNotWatered = Math.ceil(time / (1000 * 60 * 60 * 24))
      
    
    function handleWater(){
        fetch (`/plants/${plant.id}`,{
            method:"PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                last_watered: lastWatered
            }),
        }) 
        .then((r) => r.json())
        .then((watered) => {
            updateWater(watered)
        })
    }

    function handleDeleteClick(){
        fetch (`/plants/${plant.id}`,{
            method:"DELETE",
        })
        deletePlant(plant)
    }
    console.log(plant.last_watered)
    return (
        <div className = "priCard">
            <div>{plant.name}</div>
            <img className="priImage" alt="placeholder" src={plant.picture_url}></img>
            <div>Last Watered: {plant.last_watered} </div>
            <div >Days Since Last Watered: {daysNotWatered}</div>
            <button id="buttonDiv" className="water" onClick={handleWater}>Water Plant</button>
            <button id="buttonDiv" className="remove" onClick={handleDeleteClick}>Delete Plant</button>
        </div>
    )
}
export default PrivatePlantCard;