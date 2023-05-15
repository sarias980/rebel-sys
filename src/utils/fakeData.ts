import {Planet} from "../models/planet";

const fakeData = () => {

    const planet1 = new Planet(
        "Tatooine",
        "Arid",
        "10465",
        "Desert",
        "200000",
        "1 standard",
        "304",
        "23",
        "1",
        "https://swapi.dev/api/planets/1/",
        ["https://swapi.dev/api/films/1/"],
        ["https://swapi.dev/api/people/1/"],
        new Date("2023-05-15T10:00:00Z"),
        new Date("2023-05-15T12:30:00Z")
    );

    const planet2 = new Planet(
        "Hoth",
        "Frozen",
        "7200",
        "Tundra",
        "unknown",
        "1.1 standard",
        "549",
        "23",
        "100",
        "https://swapi.dev/api/planets/2/",
        ["https://swapi.dev/api/films/2/"],
        [],
        new Date("2023-05-14T15:45:00Z"),
        new Date("2023-05-14T16:00:00Z")
    );

    const planet3 = new Planet(
        "Endor",
        "Temperate",
        "4900",
        "Forests, Mountains",
        "30000000",
        "0.85 standard",
        "402",
        "18",
        "8",
        "https://swapi.dev/api/planets/3/",
        ["https://swapi.dev/api/films/3/"],
        ["https://swapi.dev/api/people/2/"],
        new Date("2023-05-13T09:20:00Z"),
        new Date("2023-05-13T09:25:00Z")
    );

    return {results: [planet1, planet2, planet3]};
}

export default fakeData;
