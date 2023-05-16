import React, {useState} from "react";
import './ResidentsList.css';
import ResidentItem from "../atoms/ResidentItem";

interface ResidentsListInterface {
    residents: string[];
}

const ResidentsList: React.FC<ResidentsListInterface> = ({residents}) => {

    return (
        <section>
            <div className={'header-section'}>
                <h2>Residents ({residents?.length})</h2>
            </div>
            <div className={'item-list'}>
                {residents?.map((r, index) =>
                    <ResidentItem resident={r} key={index}/>
                )}
            </div>

        </section>
    )
}

export default ResidentsList
