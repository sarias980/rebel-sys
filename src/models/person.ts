export class Person {
    constructor(name: string, height: string, mass: string, hair_color: string, skin_color: string, eye_color: string, birth_year: string, gender: string, homeworld: string, films: string[], species: string[], vehicles: string[], starships: string[], created: Date, edited: Date, url: string) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeworld = homeworld;
        this.films = films;
        this.species = species;
        this.vehicles = vehicles;
        this.starships = starships;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }

    public name: string;
    public height: string;
    public mass: string;
    public hair_color: string;
    public skin_color: string;
    public eye_color: string;
    public birth_year: string;
    public gender: string;
    public homeworld: string;
    public films: string[];
    public species: string[];
    public vehicles: string[];
    public starships: string[];
    public created: Date;
    public edited: Date;
    public url: string;
}
