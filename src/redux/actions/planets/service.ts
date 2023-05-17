import env from "../../../config/environment";
import {Planet} from "../../../models/planet";

export async function getPlanets() {
    try {
        const response = await fetch(`${env.apiUrl}planets`);

        if (response.ok) {
            return response?.json();
        } else {
            console.error("Error on get planets info:", response.status, response.statusText);
            return null;
        }
    } catch (e) {
        console.error("Error on get planets info:", e);
        return null
    }
}

export function sortPlanetsBy(sort: string, planets: Planet[]): Planet[] {
    switch (sort) {
        case 'name':
            return planets.sort((a, b) => a.name.localeCompare(b.name));
        case 'diameter':
            return planets.sort((a, b) => a.diameter.localeCompare(b.diameter));
        case 'climate':
            return planets.sort((a, b) => a.climate.localeCompare(b.climate));
        case 'terrain':
            return planets.sort((a, b) => a.terrain.localeCompare(b.terrain));
        case 'population':
            return planets.sort((a, b) => a.population.localeCompare(b.population));
        default:
            return planets;
    }
}
