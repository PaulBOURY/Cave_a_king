export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
}

export async function sendData(url, data, http) {
  try {
    const apiUrl = import.meta.env.VITE_API_URL + url;
    const response = await fetch(apiUrl, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    return null;
  }
}
