import {Planet} from "../../models/planet";
import {useNavigate} from "react-router-dom";
import PlanetImg from '../../assets/planet.png';
import './PlanetItemList.css'
import {useState} from "react";
import {toast} from 'react-toastify';
import DeleteModalConfirm from "./DeleteModalConfirm";
import ItemButton from "../atoms/Button";
import {deletePlanet} from "../../redux/actions/planets/types";
import {useDispatch} from "react-redux";

const PlanetItemList = (props: { planet: Planet }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const planet = props.planet;
    const planetImg = PlanetImg;
    const [showModal, setShowModal] = useState(false);

    const navToProductsAds = () => {
        if (planet) {
            navigate(`/planet/${encodeURIComponent(planet.id)}`);
        }
    };

    const handleConfirm = () => {
        dispatch(deletePlanet(planet.id));
        setShowModal(false);
        toast.success('Planet deleted successfully');
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleUpdate = (planet: Planet) => {
        if (planet) {

        }
    };

    const handleDelete = (planet: Planet) => {
        setShowModal(true);
    };

    return (
        <div className={'item-card item-container'}>
            <img src={planetImg} alt={planet.name}/>
            <div className="card-info" onClick={() => navToProductsAds()}>
                <h3>{planet.name}</h3>
                <div className="card-info-detail">
                    <p><strong>Diameter:</strong> <span>{planet.diameter}</span> km</p>
                    <p><strong>Population:</strong> <span>{planet.population}</span> inhabitants</p>
                    <p><strong>Climate:</strong> <span>{planet.climate}</span></p>
                    <p><strong>Terrain:</strong> <span>{planet.terrain}</span></p>

                </div>
            </div>
            <div className="card-buttons">
                <ItemButton text={'✖'} onClick={() => handleDelete(planet)} size={"small"}
                            color={"danger"}/>
            </div>
            {showModal && (
                <DeleteModalConfirm
                    message={`Are you sure you want to delete ${planet.name}?`}
                    confirm={handleConfirm}
                    cancel={handleCancel}
                />
            )}
        </div>
    )
}

export default PlanetItemList;
