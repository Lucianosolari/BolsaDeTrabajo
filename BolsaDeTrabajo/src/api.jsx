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

export async function createStudent(studentData) {
  try {
    const response = await fetch(`${DB_DOMAIN}/Student/createStudent`, {
      method: "POST",
      //mode:"no-cors", PROBANDO CREAR STUDENT DESDE UN PC REMOTO
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: studentData.userName,
        password: studentData.password,
        file: studentData.file,
        name: studentData.lastName,
        surname: studentData.firstName,
        userEmail: studentData.email,
        altEmail: studentData.altEmail,
        documentType: studentData.docType,
        documentNumber: studentData.docNumber,
        CUIL_CUIT: studentData.cuil,
        birth: studentData.birthdate,
        sex: studentData.gender,
        civilStatus: studentData.maritalStatus,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      const errorMessage = errorResponse || "Error desconocido";
      console.error(errorMessage); // Imprimir el mensaje de error en la consola
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getOffers() {
  try {
    const response = await fetch(`${DB_DOMAIN}/Offer/Offers`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const data = await response;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function recoverPassword(userName) {
  try {
    const response = await fetch(`${DB_DOMAIN}/User/recoverPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName.username,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "No se pudo encontrar nombre de usuario."
      );
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteStudent(token, id) {
  try {
    const response = await fetch(`${DB_DOMAIN}/Student/deleteStudent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: id,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      const error = new Error(`Response status is ${response.status}`);
      error.response = errorResponse;
      console.log(error.response);
      throw error;
    }
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
