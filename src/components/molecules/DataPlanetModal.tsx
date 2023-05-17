import React, {FC, useState} from 'react';
import './DataPlanetModal.css'
import {Planet} from "../../models/planet";
import ItemInput from "../atoms/Input";
import {checkPlanetData} from "../../utils/checkData";

interface ModalProps {
    message: string;
    confirm: (planet: Planet) => void;
    cancel: () => void;
    planet?: Planet
}

const DataPlanetModal: FC<ModalProps> = ({message, confirm, cancel, planet = new Planet()}) => {
    const [name, setName] = useState(planet?.name ? planet.name : "");
    const [climate, setClimate] = useState(planet?.climate ? planet.climate : "");
    const [diameter, setDiameter] = useState(planet?.diameter ? +planet.diameter : 0);
    const [terrain, setTerrain] = useState(planet?.terrain ? planet.terrain : "");
    const [population, setPopulation] = useState(planet?.population ? planet.population : "");
    const [gravity, setGravity] = useState(planet?.gravity ? planet.gravity : "");
    const [orbital_period, setOrbital_period] = useState(planet?.orbital_period ? +planet.orbital_period : 0);
    const [rotation_period, setRotation_period] = useState(planet?.rotation_period ? +planet.rotation_period : 0);
    const [surface_water, setSurface_water] = useState(planet?.surface_water ? +planet.surface_water : 0);

    const submit = () => {
        if (checkPlanetData(name, climate, diameter, terrain, population, gravity, orbital_period, rotation_period, surface_water)) {
            const newPlanet = new Planet(
                name,
                climate,
                diameter.toString(),
                terrain,
                population,
                gravity,
                orbital_period.toString(),
                rotation_period.toString(),
                surface_water.toString(),
                planet?.id,
                planet?.created,
                planet?.url,
                planet?.films,
                planet?.residents
            );

            confirm(newPlanet)
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-message">{message}</div>
                <div className={"modal-planet-data"}>
                    <ItemInput placeholder={'Name'} value={name} type={'text'}
                               setValue={setName}/>
                    <ItemInput placeholder={'Climate'} value={climate} type={'text'}
                               setValue={setClimate}/>
                    <ItemInput placeholder={'Diameter'} value={diameter} type={'number'}
                               setValue={setDiameter}/>
                    <ItemInput placeholder={'Terrain'} value={terrain} type={'text'}
                               setValue={setTerrain}/>
                    <ItemInput placeholder={'Population'} value={population} type={'text'}
                               setValue={setPopulation}/>
                    <ItemInput placeholder={'Gravity'} value={gravity} type={'text'}
                               setValue={setGravity}/>
                    <ItemInput placeholder={'Orbital period'} value={orbital_period} type={'number'}
                               setValue={setOrbital_period}/>
                    <ItemInput placeholder={'Rotation period'} value={rotation_period} type={'number'}
                               setValue={setRotation_period}/>
                    <ItemInput placeholder={'Surface water'} value={surface_water} type={'number'}
                               setValue={setSurface_water}/>
                </div>
                <div className="modal-buttons item-button">
                    <button className="modal-confirm" onClick={() => submit()}>
                        Confirm
                    </button>
                    <button className="modal-cancel" onClick={cancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataPlanetModal;
