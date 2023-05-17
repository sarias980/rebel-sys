import React, {useState} from "react";
import './PlanetInfo.css';
import {Planet} from "../../models/planet";
import ResidentsList from "./ResidentsList";
import DataPlanetModal from "../molecules/DataPlanetModal";
import {updatePlanet} from "../../redux/actions/planets/types";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import ItemButton from "../atoms/Button";

interface PlanetInfoInterface {
    planet: Planet;
}

const PlanetInfo: React.FC<PlanetInfoInterface> = ({planet}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleConfirm = (planet: Planet) => {
        if (planet) {
            dispatch(updatePlanet(planet));
            toast.success('Planet updated successfully');
        }
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const getDateFormat = (dateString: any) => {
        const d = new Date(dateString);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`;
    }

    const actionBtn = () => {
        return (
            <div className={'btn-planet'}>
                <div>
                    <ItemButton text={'Edit'} onClick={() => setShowModal(true)} size={"small"}/>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return !planet ? <></> : (
            <div className={'item-container planet-card-info'}>
                <div className="planet-card-info-container">
                    <div className="planet-card-info-detail">
                        <div className={'info-section'}>
                            <p><strong>Climate:</strong> <span>{planet.climate}</span></p>
                            <p><strong>Terrain:</strong> <span>{planet.terrain}</span></p>
                            <p><strong>Gravity:</strong> <span>{planet.gravity}</span></p>
                            <p><strong>Diameter:</strong> <span>{planet.diameter}</span> km</p>
                        </div>
                        <div className={'info-section'}>
                            <p><strong>Orbital period:</strong> <span>{planet.orbital_period}</span></p>
                            <p><strong>Rotation period:</strong> <span>{planet.rotation_period}</span></p>
                            <p><strong>Surface water:</strong> <span>{planet.surface_water}</span></p>
                            <p><strong>Population:</strong> <span>{planet.population}</span> inhabitants</p>
                        </div>
                        <div className={'info-section'}>
                            <p><strong>Created:</strong> <span>{getDateFormat(planet.created)}</span></p>
                            <p><strong>Edited:</strong> <span>{getDateFormat(planet.edited)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderResidentsList = () => {
        return !planet ? <></> : (
            <div className={'planet-card-info'}>
                <ResidentsList residents={planet.residents}/>
            </div>
        )
    }

    return (
        <div className={'page-container'}>
            {actionBtn()}
            {renderContent()}
            {renderResidentsList()}
            {showModal && (
                <DataPlanetModal message={'Create Planet'} confirm={handleConfirm} cancel={handleCancel}
                                 planet={planet}/>
            )}
        </div>
    );
}
export default PlanetInfo;
