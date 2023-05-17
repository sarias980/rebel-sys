import React, {ChangeEvent} from "react";
import './SortByPlanets.css';

interface ShortByPlanetsInterface {
    sort: string;
    setSort: (sort: string) => void;
}

const SortByPlanets: React.FC<ShortByPlanetsInterface> = ({sort, setSort}) => {
    const filterOptions = ['name', 'diameter', 'climate', 'terrain', 'population']

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const renderOption = (options:string[]) => {
      return(
          <select value={sort} onChange={handleChange}>
              {options.map((option: any) => (
                  <option key={option} value={option}>
                      {option}
                  </option>
              ))}
          </select>
      )
    }

    return (
        <div className={'order-container'}>
            <h5>Order by: </h5>
            <div className={'item-input'}>
                {
                    renderOption(filterOptions)
                }
            </div>
        </div>
    )
}

export default SortByPlanets;
