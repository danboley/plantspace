
import PublicPlantCard from "./PublicPlantCard";
import Search from "./Search";

function PublicPlantContainer ({plants, search, setSearch}){

    return (        
        <div>
            <Search setSearch={setSearch}/>
            {plants.map(plant => <PublicPlantCard  {...plant} plant={plant} key={plant.id}/>)}
        </div>        
    )
}


export default PublicPlantContainer;
