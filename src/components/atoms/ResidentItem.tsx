import React, {useEffect, useState} from "react";
import './ResidentItem.css'
import {getResident} from "../../redux/actions/residents/service";
import {Person} from "../../models/person";
import PersonLogo from "../../assets/person-icon.png"

interface ResidentItemInterface {
    resident: string;
}

const ResidentItem: React.FC<ResidentItemInterface> = ({resident}) => {
    const [residentData, setResidentData] = useState<Person>();

    useEffect(() => {
        if (resident){
            getResident(resident).then((response) => {
                if (response){
                    setResidentData(response);
                }
            })
        }
    }, [resident])

    const renderItem = () => {
      return residentData ? (
          <div className="person-card">
              <img src={PersonLogo} alt={residentData.name}/>
              <h4>{residentData.name}</h4>
          </div>
      ) : null
    }

    return(
        <div>
            {renderItem()}
        </div>
    )
}
export default ResidentItem;
