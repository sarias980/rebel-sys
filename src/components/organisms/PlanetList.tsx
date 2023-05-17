import PlanetItemList from "../molecules/PlanetItemList";
import {Planet} from "../../models/planet";
import ListHeader from "../molecules/ListHeader";
import {useState} from "react";
import {filterPlanets} from "../../utils/filterPlanets";
import DataPlanetModal from "../molecules/DataPlanetModal";
import {addPlanet} from "../../redux/actions/planets/types";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const PlanetList = (props: { planets: Planet[] }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const planets = props.planets;

    const filteredCompanies = filterPlanets(planets, searchTerm);

    const handleConfirm = (planet: Planet) => {
        if (planet) {
            dispatch(addPlanet(planet));
            toast.success('Planet created successfully');
        }
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <section>
            <ListHeader title={'Planets'} setSearchTerm={setSearchTerm} searchTerm={searchTerm} count={planets.length}
                        setShowModal={setShowModal}/>
            {filteredCompanies?.map(planet =>
                <PlanetItemList key={planet.name} planet={planet}/>
            )}
            {showModal && (
                <DataPlanetModal message={'Create Planet'} confirm={handleConfirm} cancel={handleCancel}/>
            )}
        </section>
    )
}

export default PlanetList;
