import {Planet} from "../../../models/planet";

export const SET_PLANETS = 'SET_PLANETS';
export const DELETE_PLANET = 'DELETE_PLANET';
export const ADD_PLANET = 'ADD_PLANET';
export const UPDATE_PLANET = 'UPDATE_PLANET';

export const setPlanets = (planets: Planet[]) => ({
    type: SET_PLANETS,
    payload: planets,
});

export const deletePlanet = (id: string) => ({
    type: DELETE_PLANET,
    payload: id,
});

export const addPlanet = (planet: Planet) => ({
    type: ADD_PLANET,
    payload: planet,
});

export const updatePlanet = (planet: Planet) => ({
    type: UPDATE_PLANET,
    payload: planet,
});

