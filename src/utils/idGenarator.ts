import {v4 as uuidv4} from 'uuid';
import {Planet} from "../models/planet";

export function generateUniqueId() {
    return uuidv4();
}

export function addIdOnDataResponse(planetsResponse: Planet[]){
    const planets: Planet[] = [];

    planetsResponse.map((p) => {
        p.id = generateUniqueId()
        planets.push(p);
    })

    return planets;
}
