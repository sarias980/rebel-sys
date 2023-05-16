import React, {useEffect} from 'react';
import './App.css';
import {getPlanets} from "./redux/actions/planets/service";
import {useDispatch, useSelector} from "react-redux";
import {setPlanets} from "./redux/actions/planets/types";
import Navigation from "./navigation/navigation";
import './styles/style.css'
import Header from "./components/organisms/Header";
import {addIdOnDataResponse} from "./utils/idGenarator";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getPlanets().then((data) => {
            if (data) {
                dispatch(setPlanets(addIdOnDataResponse(data.results)));
            }
        })
    }, [dispatch]);

    return (
        <div className="App page">
            <Header/>
            <Navigation/>
        </div>
    );
}

export default App;
