
function PrivatePlantCard ({plant, deletePlant}){

    function handleWater(){
        console.log("WATER")
    }

    function handleDeleteClick(){
        fetch (`/plants/${plant.id}`,{
            method:"DELETE",
        })
        deletePlant(plant)
    }

    return (
        <div className = "priCard">
            <div>{plant.name}</div>
            <div>Type of Plant: </div>
            <img className="priImage" alt="placeholder" src={plant.picture_url}></img>
            <div>Last Watered: </div>
            <button onClick={handleWater}>Need Water</button>
            <button className="remove" onClick={handleDeleteClick}>Delete Plant</button>
        </div>
    )
}
export default PrivatePlantCard;