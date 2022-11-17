import PrivatePlantCard from "./PrivatePlantCard";


function PlantContainer ({ user, deletePlant, setPlants}){

    return (
        <div>
            {user?.plants?.map(personalPlant => <PrivatePlantCard  {...personalPlant} plant={personalPlant} key={personalPlant.id} deletePlant={deletePlant} setPlants={setPlants} />)}
        </div>
    )
}
export default PlantContainer;