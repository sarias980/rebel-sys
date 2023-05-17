import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Planet} from "../../models/planet";
import PlanetHeader from "../../components/molecules/PlanetHeader";
import PlanetInfo from "../../components/organisms/PlanetInfo";


const PlanetsDetailPage: React.FC = () => {
    const { id } = useParams();

    const planet = useSelector((state: any) => state.planets?.find((planet:Planet) => planet.id === id));

    return(
        <div>
            <PlanetHeader name={planet?.name}/>
            {
                planet ? (<PlanetInfo planet={planet}/>)  : <></>
            }
        </div>
    )
}

export default PlanetsDetailPage;
