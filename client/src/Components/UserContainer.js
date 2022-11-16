import PrivatePlantCard from "./PrivatePlantCard";
// import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";


function PlantContainer ({ user }){

    const userPlants = user.plants

    // const renderPersonalPlants = userPlants.map((personalPlant) => {
    //     return <PrivatePlantCard {...personalPlant} plant={personalPlant} key={personalPlant.id}/>
    // })
    //we will need to have a message if the user is not logged in that they will have to log in to view their plants

return (
    <div>
        {/* {userPlants === null ? "Please Login to View your plant library" :{renderPersonalPlants}} */}
        <PrivatePlantCard/>
    </div>
)
}
export default PlantContainer;