import env from "../../../config/environment";

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
