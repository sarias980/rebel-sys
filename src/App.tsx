import React, {useEffect} from 'react';
import './App.css';
import {getPlanets} from "./redux/actions/planets/service";
import {useDispatch, useSelector} from "react-redux";
import {setPlanets} from "./redux/actions/planets/types";
import Navigation from "./navigation/navigation";
import './styles/style.css'
import Header from "./components/organisms/Header";
import {addIdOnDataResponse} from "./utils/idGenarator";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer />
        </div>
    );
}

export default App;
