import React, {useEffect} from 'react';
import './App.css';
import {getPlanets} from "./redux/actions/planets/service";
import {useDispatch, useSelector} from "react-redux";
import {setPlanets} from "./redux/actions/planets/types";
import Navigation from "./navigation/navigation";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getPlanets().then((data) => {
            console.log(data);
            if (data) {
                dispatch(setPlanets(data.results));
            }
        })
    }, [dispatch]);

    return (
        <div className="App">
            <Navigation/>
        </div>
    );
}

export default App;
