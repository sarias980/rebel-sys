import {Planet} from "../../models/planet";
import {useNavigate} from "react-router-dom";
import PlanetImg from '../../assets/planet.png'
import './PlanetItemList.css'

const PlanetItemList = (props: { planet: Planet }) => {
    const navigate = useNavigate();
    const planet = props.planet;
    const planetImg = PlanetImg

    const navToProductsAds = () => {
        if (planet) {
            navigate(`/planet/${encodeURIComponent(planet.name)}`);
        }
    };

    return (
        <div className={'item-card'} onClick={() => navToProductsAds()}>
            <img src={planetImg}/>
            <div className="card-info">
                <h3>{planet.name}</h3>
                <div className="card-info-detail">
                    <p><strong>Diameter:</strong> <span>{planet.diameter}</span> km</p>
                    <p><strong>Climate:</strong> <span>{planet.climate}</span></p>
                    <p><strong>Terrain:</strong> <span>{planet.terrain}</span></p>
                    <p><strong>Population:</strong> <span>{planet.population}</span> inhabitants</p>
                </div>
            </div>
        </div>
    )
}

export default PlanetItemList;
