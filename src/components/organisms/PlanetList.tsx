import PlanetItemList from "../molecules/PlanetItemList";
import {Planet} from "../../models/planet";
import ListHeader from "../molecules/ListHeader";
import React, {useEffect, useState} from "react";
import {filterPlanets} from "../../utils/filterPlanets";
import DataPlanetModal from "../molecules/DataPlanetModal";
import {addPlanet} from "../../redux/actions/planets/types";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import PaginationFooter from "../molecules/PaginationFooter";
import SortByPlanets from "../molecules/SortByPlanets";
import {sortPlanetsBy} from "../../redux/actions/planets/service";

const PlanetList = () => {
    const dispatch = useDispatch();
    const planets = useSelector((state: any) => state.planets);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('name');
    const [paginatePlanet, setPaginatePlanet] = useState<Planet[]>([]);
    const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

    const pageSize = 3;
    const indexOfLastPost = page * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;


    useEffect(() => {
        if (planets && planets.length > 0) {
            const sortList = sortPlanetsBy(sort, planets);
            const filterList = filterPlanets(sortList, searchTerm)
            setFilteredPlanets(filterList);
            const paginateList = filterList.slice(indexOfFirstPost, indexOfLastPost);
            setPaginatePlanet(paginateList);
        }
    }, [planets, page, searchTerm, sort]);

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

    const handleChangeSearch = (e: string) => {
        if (e.length > 0) {
            setPage(1);
        }
        setSearchTerm(e);
    }

    const render = () => {
        if (!paginatePlanet || paginatePlanet?.length === 0) {
            return <h2 style={{textAlign: 'center'}}> No data...</h2>
        }

        return (
            <div>
                {paginatePlanet?.map((planet: Planet) =>
                    <PlanetItemList key={planet.name} planet={planet}/>
                )}
                <PaginationFooter
                    page={page}
                    pageSize={pageSize}
                    data={filteredPlanets.length}
                    setPage={setPage}
                />
            </div>
        )
    }

    return (
        <section>
            <ListHeader title={'Planets'} setSearchTerm={handleChangeSearch} searchTerm={searchTerm}
                        count={planets?.length}
                        setShowModal={setShowModal}/>
            <SortByPlanets sort={sort} setSort={setSort}/>
            {render()}
            {showModal && (
                <DataPlanetModal message={'Create Planet'} confirm={handleConfirm} cancel={handleCancel}/>
            )}
        </section>
    )
}

export default PlanetList;
