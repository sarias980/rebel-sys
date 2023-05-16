import React from "react";
import BackButton from "../atoms/BackButton";
import './PlanetHeader.css'

const PlanetHeader = (props: {name:string}) => {
  return(
      <div className={'planet-header'}>
          <BackButton/>
          <h2>{props.name}</h2>
      </div>
  )
}

export default PlanetHeader;
