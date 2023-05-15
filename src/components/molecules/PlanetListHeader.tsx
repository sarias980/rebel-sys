import React from "react";
import SearchHeaderList from "./SearchHeaderList";

import './PlanetListHeader.css'

interface HeaderProps {
    title: string;
    searchTerm: string;
    setSearchTerm: Function;
}

const PlanetListHeader: React.FC<HeaderProps> = ({title: string,searchTerm,setSearchTerm }) => {
  return(
      <div className={'header-section'}>
          <h2>Planets</h2>
          <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
  )
}

export default PlanetListHeader;
