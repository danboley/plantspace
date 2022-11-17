import PrivatePlantCard from "./PrivatePlantCard";
// import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";


function PlantContainer ({ user, deletePlant, setPlants}){
    

    const renderPersonalPlants = user.plants.map((personalPlant) => {
        return <PrivatePlantCard {...personalPlant} plant={personalPlant} key={personalPlant.id} deletePlant={deletePlant} setPlants={setPlants} />
    })
    

    return (
    <div>
        {/* {user === null ?  : renderPersonalspecies} */}
        {renderPersonalPlants}
    </div>
)
}
export default PlantContainer;