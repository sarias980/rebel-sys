import React from "react";
import {useSelector} from "react-redux";

const PlanetsListPage: React.FC = () => {
    const planets = useSelector((state: any) => state.planets);

    return(
        <div className={'page'}>

        </div>
    )
}

export default PlanetsListPage;
