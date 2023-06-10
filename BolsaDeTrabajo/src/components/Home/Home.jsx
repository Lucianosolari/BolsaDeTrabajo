import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center mt-5">
              Bolsa de trabajo para Estudiantes
            </h1>
            <p className=" text-justify">
              La Secretaría de Asuntos Universitarios de la Universidad
              Tecnológica Nacional Facultad Regional Rosario, te invita a
              ingresar tu CV en el Sistema Virtual de Búsqueda de Empleo para
              que encuentres el trabajo o la pasantía que estás buscando. Esta
              es una base en la cual podes actualizar tus datos cuantas veces
              quieras (y es recomendable que lo hagas periódicamente) e
              inscribirte a las ofertas que proponen las empresas o
              instituciones.
            </p>
            <p className=" text-justify">
              ¿Como Inscribirte? El primer paso es tener una cuenta de email de
              la UTN-FRRO, si aún no la tienes, retira el formulario en la
              Secretaría de Asuntos Universitarios. ¿Cómo acceder al sistema de
              Bolsa de Trabajo? Debes ingresar al sistema mediante el formulario
              que se encuentra más arriba, en esta misma página, introduciendo
              tu usuario y tu contraseña. Recuerda que primero debiste haber
              cambiado la clave por defecto de la cuenta de correo
              @frro.utn.edu.ar.
            </p>
            <p className="text-justify">
              ¿Cómo subir tu CV y actualizar información personal y académica?
              La primera vez que accedes al sistema tendrás que cargar tus datos
              desde "Actualizar mis datos". El CV (en formato pdf, doc o archivo
              comprimido) lo subirás desde la pestaña "Otros Datos". IMPORTANTE:
              Si no tienes subido el CV al momento de postularte, tu postulación
              no será tenida en cuenta por el sistema.
            </p>
            <p className="text-justify">
              ¿Cómo postularte a las ofertas laborales? Desde "Búsquedas"
              tendrás un listado con todas las ofertas laborales publicadas, y
              para ver qué solicita cada una de ellas debes hacer clic donde
              está la lupa (sobre el margen derecho). Si te interesa esa
              búsqueda, haz clic en "Postularme a esta búsqueda". Repetimos: Es
              imprescindible haber cargado tu currículum en el sistema previo a
              postularte para las búsquedas. Una vez hecho esto, haz clic donde
              dice volver y podrás acceder a alguna otra búsqueda o salir del
              sistema. En la fila correspondiente a la búsqueda a la cual te
              postulaste deberá aparecer la fecha de postulación.
            </p>
            <p className=" text-justify">
              ¿Cada cuánto tiempo se publican búsquedas laborales? A medida que
              las empresas soliciten personal, la SAU publicará las búsquedas en
              el sistema una vez verificada la documentación de la misma.
            </p>
            <p className="text-center">Tipos de BÚSQUEDAS:</p>
            <p className=" text-justify">
              BOLSA DE TRABAJO: No es necesario ser alumno regular para este
              tipo de búsqueda. En el caso de que sea requisito, estará
              especificado en la publicación.
            </p>
            <p className="text-justify">
              PASANTÍAS: Para este tipo de búsqueda, es REQUISITO (Ley Nacional
              Nº26427/2008) ser ALUMNO REGULAR. Es decir, haber aprobado 2
              MATERIAS en el ciclo lectivo anterior o 2 materias en el ciclo
              lectivo actual. Aquellos que no cumplan con este requisito no
              serán tenidos en cuenta en sus postulaciones en este tipo de
              búsquedas. Más info en: PASANTÍAS.
            </p>
            <p className="text-justify">
              Como podrás ver, es muy fácil y rápido postularse a una Oferta
              Laboral o de Pasantía. Es por eso que es fundamental que tu CV
              siempre esté actualizado. Los cambios más frecuentes son:
            </p>
            <ul>
              <li>Teléfono principal</li>
              <li>Teléfono de mensajes o celular</li>
              <li>Dirección de e-mail</li>
              <li>Actualización del curriculum vitae</li>
              <li>
                Cualquier otra modificación, ya sea en idioma, conocimientos,
                experiencia laboral, etc., es imprescindible notificarla y
                requerirá la actualización de tu CV.
              </li>
            </ul>
            <p className="text-justify">
              Contamos con tu colaboración y te recomendamos consultar nuestras
              propuestas laborales en el Sistema Virtual de Búsqueda de Empleo.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
