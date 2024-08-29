export async function fetchData(url: string, method: string, customHeaders: object) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                ...customHeaders,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return null;
    }
}
