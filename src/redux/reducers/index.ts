import {SET_PLANETS} from "../actions/planets/types";

export default function reducer(state = [], {type, payload}: { type: string, payload: any }): any {
    switch (type) {
        //PLANETS
        case SET_PLANETS:
            return {
                ...state,
                planets: payload
            }

        //Default
        default:
            return state;
    }
}
