import PrivatePlantCard from "./PrivatePlantCard";
// import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";

function PlantContainer ({plants, setSearch}){
    //we will need to have a message if the user is not logged in that they will have to log in to view their plants
    //user will need to have a serializer to view all of their plants
return (
    <div>
        Test
        <Search/>
        <PrivatePlantCard setSearch={setSearch}/>
    </div>
)
}
export default PlantContainer;