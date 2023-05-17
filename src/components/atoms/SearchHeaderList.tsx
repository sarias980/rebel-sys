import React from "react";
import './SearchHeaderList.css'

interface SearchHeaderListProps {
    searchTerm: string;
    setSearchTerm: Function;
}

const SearchHeaderList: React.FC<SearchHeaderListProps> = ({searchTerm, setSearchTerm}) => {

    return(
            <div className={'filter-header'}>
                <input
                    type="text"
                    placeholder="Search by name, climate or terrain"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
    )
}

export default SearchHeaderList;
