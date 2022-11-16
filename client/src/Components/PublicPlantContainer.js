import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";

function PublicPlantContainer ({plants, search, setSearch}){
    const renderPlants = plants.map((plant) => {
        return <PublicPlantCard {...plant} plant={plant} key={plant.id}/>
    })
    return (
        <div>
            <Search/>
            <div className="truePlantCon">
                {/* <PublicPlantCard/> */}
                {renderPlants}
            </div>
        </div>
    )
}
export default PublicPlantContainer;