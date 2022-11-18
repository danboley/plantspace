
function PublicPlantCard ({plant}){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function handleDecision(){
        if (plant.store.store_url === ""){
            return window.alert("Sorry but this person doesn't have a music account :( ")
            }
            else {openInNewTab(plant.store.store_url)
            }
        }
    return (
        <div className="pubPlantCard">
            <div>{`${plant.name} the ${plant.species.species_name}`}</div>
            <div>{`Owner: ${plant.user.first_name} ${plant.user.last_name}`}</div>
            <img className="pubPlantPic" alt="test" src={plant.picture_url}/>
            <div>You Can Find a Plant like Me At: <button className="pubButton" onClick={handleDecision}>{`${plant.store.name}`}</button>{` in ${plant.store.location}`}</div>
        </div>
    )
}
export default PublicPlantCard;