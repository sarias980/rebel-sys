import React from "react";
import {useSelector} from "react-redux";
import PlanetList from "../../components/organisms/PlanetList";

const PlanetsListPage: React.FC = () => {
    const planets = useSelector((state: any) => state.planets);

    return(
        <div className={'page'}>
            <PlanetList planets={planets}/>
        </div>
    )
}

export default PlanetsListPage;
