import PrivatePlantCard from "./PrivatePlantCard";


function PlantContainer ({ user, deletePlant, setPlants, plants}){

    return (
        <div>
            <div className="plantTitle">Your Plants</div>
                <div className="userContainer">
                    {console.log(plants)}
                    {plants?.map(personalPlant => <PrivatePlantCard  {...personalPlant} plant={personalPlant} key={personalPlant.id} deletePlant={deletePlant} setPlants={setPlants} />)}
                </div>
        
        </div>

    )
}
export default PlantContainer;