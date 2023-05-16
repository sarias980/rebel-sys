import React from "react";
import './PlanetInfo.css';
import {Planet} from "../../models/planet";
import PlanetImg from '../../assets/planet.png';
import ResidentsList from "./ResidentsList";

interface PlanetInfoInterface {
    planet: Planet;
}

const PlanetInfo: React.FC<PlanetInfoInterface> = ({planet}) => {

    const renderContent = () => {
      return !planet ? <></> : (
          <div className={'item-container planet-card-info'}>
              <img src={PlanetImg} alt={planet.name}/>
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
                  </div>
                  <div className={'date-footer'}>
                      <p><strong>Created:</strong> <span></span></p>
                      <p><strong>Edited:</strong> <span></span></p>
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

    return(
        <div className={'page-container'}>
            {renderContent()}
            {renderResidentsList()}
        </div>
    );
}
export default PlanetInfo;
