
export class Planet {
    public name: string;
    public climate: string;
    public terrain: string;
    public population: string;

    constructor(name: string, climate: string, terrain: string, population: string) {
        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.population = population;
    }
}
