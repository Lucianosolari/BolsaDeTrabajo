const DB_DOMAIN = "https://localhost:7069/api";

export async function loginUser(userData) {
  try {
    const response = await fetch(`${DB_DOMAIN}/Authentication/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "No se pudo iniciar sesión.");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createOffer({ token, offerData }) {
  try {
    const response = await fetch(`${DB_DOMAIN}/Offer/createOffer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        offerTitle: offerData.title,
        offerSpecialty: offerData.specialty,
        offerDescription: offerData.description,
        createdDate: offerData.date,
        companyId: offerData.companyId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// const handleCreateOffer = () => {
//   fetch("https://localhost:7069/api/Offer/createOffer", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`, // Agregamos el token en el encabezado 'Authorization'
//     },
//     body: JSON.stringify({
//       offerTitle: "Nueva",
//       offerSpecialty: "de react",
//       offerDescription: "de react",
//       createdDate: "2024-04-27T01:45:18.341Z",
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// };
