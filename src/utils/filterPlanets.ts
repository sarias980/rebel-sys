import {Planet} from "../models/planet";

export function filterPlanets(planets: Planet[], filterString: string): Planet[] {
    const filter = filterString.toLowerCase();

    return planets.filter((planet) => {
        const { name, climate, terrain } = planet;

        // Compare the name, weather and terrain in lower case with the filter
        return (
            name.toLowerCase().includes(filter) ||
            climate.toLowerCase().includes(filter) ||
            terrain.toLowerCase().includes(filter)
        );
    });
}
