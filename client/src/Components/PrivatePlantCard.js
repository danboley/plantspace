
function PrivatePlantCard (){

    function handleWater(){
        console.log("WATER")
    }

    function handleDelete(){
        console.log("DELETE")
    }

    return (
        <div className = "priCard">
            <div> Name for Your Plant: </div>
            <div>Type of Plant: </div>
            <img className="priImage" alt="placeholder" src="https://www.cnet.com/a/img/resize/18745075acf9e4ed11171d3398f09c29733866f3/hub/2022/10/15/4ee63290-986c-42c1-af30-1ab0e5ca6dd0/newemoji.png?auto=webp&width=1200"></img>
            <div>Last Watered: </div>
            <button onClick={handleWater}>Need Water</button>
            <button onClick={handleDelete}>Delete Plant</button>
        </div>
    )
}
export default PrivatePlantCard;