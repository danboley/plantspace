import PrivatePlantCard from "./PrivatePlantCard";
// import PublicPlantCard from "./PublicPlantCard";

function PlantContainer ({plants}){
    //we will need to have a message if the user is not logged in that they will have to log in to view their plants
    //user will need to have a serializer to view all of their plants
return (
    <div>
        <PrivatePlantCard/>
    </div>
)
}
export default PlantContainer;