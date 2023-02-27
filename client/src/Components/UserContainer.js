import PrivatePlantCard from "./PrivatePlantCard";


function PlantContainer ({ lastWatered, updateWater, deletePlant, setPlants, plants}){

    return (
        <div>
            <div className="plantTitle">Your Plants:</div>
                <div className="userContainer">
                    {plants?.map(personalPlant => <PrivatePlantCard lastWatered={lastWatered} updateWater={updateWater} {...personalPlant} plant={personalPlant} key={personalPlant.id} deletePlant={deletePlant} setPlants={setPlants} />)}
                </div>
        
        </div>

    )
}
export default PlantContainer;