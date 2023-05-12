import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

//Pages
import PlanetsListPage from "../pages/PlanetsList/PlanetsListPage";
import PlanetDetailPage from "../pages/PlanetDetail/PlanetDetailPage";

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlanetsListPage/>}/>
                <Route path="/planet/:id" element={<PlanetDetailPage/>}/>
            </Routes>
        </Router>
    );
}

export default Navigation;
