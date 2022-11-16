
function PrivatePlantCard (personalPlant){

    function handleWater(){
        console.log("WATER")
    }

    function handleDelete(){
        console.log("DELETE")
    }

    return (
        <div className = "priCard">
            <div>{personalPlant.name}</div>
            <div>Type of Plant: </div>
            <img className="priImage" alt="placeholder" src={personalPlant.picture_url}></img>
            <div>Last Watered: </div>
            <button onClick={handleWater}>Need Water</button>
            <button onClick={handleDelete}>Delete Plant</button>
        </div>
    )
}
export default PrivatePlantCard;