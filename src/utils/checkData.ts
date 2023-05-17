import {toast} from "react-toastify";

export function checkPlanetData(
    name: string | undefined,
    climate: string | undefined,
    diameter: number | undefined,
    terrain: string | undefined,
    population: string | undefined,
    gravity: string | undefined,
    orbital_period: number | undefined,
    rotation_period: number | undefined,
    surface_water: number | undefined
) {
    if (!name) {
        toast.error('Planet name is not correct')
        return false
    }

    if (!climate) {
        toast.error('Planet climate is not correct')
        return false
    }

    if (!diameter || diameter < 0) {
        toast.error('Planet diameter is not correct')
        return false
    }

    if (!terrain) {
        toast.error('Planet terrain is not correct')
        return false
    }

    if (!population) {
        toast.error('Planet population is not correct')
        return false
    }

    if (!gravity) {
        toast.error('Planet gravity is not correct')
        return false
    }

    if (!orbital_period || orbital_period < 0) {
        toast.error('Planet orbital period is not correct')
        return false
    }

    if (!rotation_period || rotation_period < 0) {
        toast.error('Planet rotation period is not correct')
        return false
    }

    if (!surface_water || surface_water < 0) {
        toast.error('Planet surface water is not correct')
        return false
    }

    return true
}
