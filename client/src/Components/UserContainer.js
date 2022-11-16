import PrivatePlantCard from "./PrivatePlantCard";
// import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";


function PlantContainer ({ user }){

    // const userPlants = user.plants

    const renderPersonalPlants = user.plants.map((personalPlant) => {
        return <PrivatePlantCard {...personalPlant} plant={personalPlant} key={personalPlant.id}/>
    })

return (
    <div>
        {/* {user === null ? "Please Login to View your plant library" : renderPersonalPlants} */}
        {/* <div>{userPlants[0].name}</div>
        <img src={userPlants[0].picture_url} alt="test"></img> */}
        {renderPersonalPlants}
        {/* <PrivatePlantCard/> */}
    </div>
)
}
export default PlantContainer;