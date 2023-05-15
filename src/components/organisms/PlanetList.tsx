import PlanetItemList from "../molecules/PlanetItemList";
import {Planet} from "../../models/planet";
import PlanetListHeader from "../molecules/PlanetListHeader";
import {useState} from "react";
import {filterPlanets} from "../../utils/filterPlanets";

const PlanetList = (props: { planets: Planet[] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const planets = props.planets;

    const filteredCompanies = filterPlanets(planets, searchTerm)

    return (
        <section>
            <PlanetListHeader title={'Planets'} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            {filteredCompanies?.map(planet =>
                <PlanetItemList key={planet.name} planet={planet}/>
            )}
        </section>
    )
}

export default PlanetList;
