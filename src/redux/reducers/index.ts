import {
    ADD_PLANET,
    DELETE_PLANET,
    SET_PLANETS,
    UPDATE_PLANET
} from "../actions/planets/types";
import {Planet} from "../../models/planet";

const initialState = {
    planets: []
};

export default function reducer(state = initialState, {type, payload}: { type: string, payload: any }): any {
    switch (type) {
        //PLANETS
        case SET_PLANETS:
            return {
                ...state,
                planets: payload
            }

        case ADD_PLANET:
            const newPlanetList = [...state.planets, payload];
            return {
                ...state,
                planets: newPlanetList
            }

        case UPDATE_PLANET:
            const updatedPlanets = state.planets.map((planet: Planet) => {
                if (planet.id === payload.id) {
                    return {...planet, ...payload};
                }
                return planet;
            });
            return {
                ...state,
                planets: updatedPlanets
            }

        case DELETE_PLANET:
            const id = payload;
            const newPlanets = state.planets.filter((planet: Planet) => planet.id !== id);
            return {...state, planets: newPlanets};

        //Default
        default:
            return state;
    }
}
