import React, {useState} from 'react'

function NewPlantForm ({addNewPlant}){
    const [newPlantName, setNewPlantName] = useState("")
    const [newPicture, setNewPicture] = useState("")
    const [newWaterTime, setNewWaterTime] = useState(new Date())

    function handleSubmit(e){
        e.preventDefault()
        const newPlantObj= {
            name: newPlantName,
            picture_url: newPicture,
            last_watered: newWaterTime,
        }
        fetch(`/plants`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlantObj)
        })
        .then(res => res.json())
        .then(data => addNewPlant(data))
    }

    return (
        <div className='form-container'>
            <h1>Create Your Plant</h1>
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
                <input 
                type="datetime" 
                placeholder="Last Time Your Plant Was Watered..." 
                value={newWaterTime} 
                onChange={(e) => setNewWaterTime(e.target.value)}/>
                <button type='submit' className='submitButton'>Add Your Plant</button>
            </form>            
        </div>
    )
}
export default NewPlantForm;