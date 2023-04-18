import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function ApplicationHistory() {
  // Estado para almacenar los datos de búsqueda laboral obtenidos desde el backend
  const [busquedaLaboralData, setBusquedaLaboralData] = useState([]);

  // Simulación de una llamada a la API del backend para obtener los datos de búsqueda laboral
  //useEffect(() => {
  // Aquí puedes realizar una llamada a tu API del backend para obtener los datos de búsqueda laboral
  // y luego usar setBusquedaLaboralData para actualizar el estado con los datos obtenidos
  //     const fetchBusquedaLaboralData = async () => {
  //       try {
  //         // Realiza una llamada a la API del backend y obtén los datos de búsqueda laboral
  //         const response = await fetch("/api/busqueda-laboral");
  //         const data = await response.json();

  //         // Actualiza el estado con los datos obtenidos del backend
  //         setBusquedaLaboralData(data);
  //       } catch (error) {
  //         console.error(
  //           "Error al obtener los datos de búsqueda laboral desde el backend:",
  //           error
  //         );
  //       }
  //     };

  //     fetchBusquedaLaboralData();
  //   }, []);

  return (
    <>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Título de búsqueda</th>
            <th>Fecha de postulación</th>
          </tr>
        </thead>
        {/* <tbody>
          {busquedaLaboralData.map((busqueda, index) => (
            <tr key={index}>
              <td>{busqueda.numeroBusqueda}</td>
              <td>{busqueda.tituloBusqueda}</td>
              <td>{busqueda.fechaPostulacion}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          <tr>
            <td>numero</td>
            <td>titulo</td>
            <td>Fecha</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
