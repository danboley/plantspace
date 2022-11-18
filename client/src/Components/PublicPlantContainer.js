
import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";

function PublicPlantContainer ({plants, search, setSearch}){

    return (        
        <div>
            <Search setSearch={setSearch}/>
            <div className="truePlantCon">
                {plants?.map(plant => <PublicPlantCard  {...plant} plant={plant} key={plant.id}/>)}
            </div>
        </div>        
    )
}


export default PublicPlantContainer;
