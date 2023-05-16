import React from "react";
import SearchHeaderList from "./SearchHeaderList";

import './ListHeader.css'

interface HeaderProps {
    title: string;
    searchTerm: string;
    setSearchTerm: Function;
}

const ListHeader: React.FC<HeaderProps> = ({title,searchTerm,setSearchTerm }) => {
  return(
      <div className={'header-section'}>
          <h2>{title}</h2>
          <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
  )
}

export default ListHeader;
