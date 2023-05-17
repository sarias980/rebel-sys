import React from "react";
import SearchHeaderList from "../atoms/SearchHeaderList";

import './ListHeader.css'
import ItemButton from "../atoms/Button";

interface HeaderProps {
    title: string;
    searchTerm: string;
    setSearchTerm: Function;
    setShowModal: Function;
    count?: number;
}

const ListHeader: React.FC<HeaderProps> = ({title, searchTerm, setSearchTerm, setShowModal, count}) => {

    return (
        <div className={'header-section'}>
            <h2>{title} {count ? `(${count})` : ''}</h2>
            <div className={'actions'}>
                {
                    setShowModal && <ItemButton text={'Add'} onClick={() => {
                        setShowModal(true);
                    }
                    } size={"small"}/>
                }
                <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>

        </div>
    )
}

export default ListHeader;
