export async function getResident( url:string) {
    if (!url) return null

    try {
        const response = await fetch(`${url}`);

        if (response.ok) {
            return response?.json();
        } else {
            console.error("Error on get resident info:", response.status, response.statusText);
            return null;
        }
    } catch (e) {
        console.error("Error on get resident info:", e);
        return null
    }



}
