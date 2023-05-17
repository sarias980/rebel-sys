import {generateUniqueId} from "../utils/idGenarator";

export class Planet {
    constructor(
        name: string = '',
        climate: string = '',
        diameter: string = '',
        terrain: string = '',
        population: string = '',
        gravity: string = '',
        orbital_period: string = '',
        rotation_period: string = '',
        surface_water: string = '',
        id?: string,
        created?: string,
        url?:string,
        films?:string[],
        residents?:string[]
    ) {
        this.id = id ? id : generateUniqueId()
        this.name = name;
        this.climate = climate;
        this.diameter = diameter;
        this.terrain = terrain;
        this.population = population;
        this.gravity = gravity;
        this.orbital_period = orbital_period;
        this.rotation_period = rotation_period;
        this.surface_water = surface_water;
        this.url = url ? url : '';
        this.films = films ? films : [];
        this.residents = residents ? residents : [];
        this.created = created ? created : new Date().toDateString();
        this.edited = new Date();
    }

    public id:string;
    public name: string;
    public climate: string;
    public diameter: string;
    public terrain: string;
    public population: string;
    public gravity: string;
    public orbital_period: string;
    public rotation_period: string;
    public surface_water: string;
    public url: string;
    public films: string[];
    public residents: string[];
    public created: string;
    public edited: Date;


}
