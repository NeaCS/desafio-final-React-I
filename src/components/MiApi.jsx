import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { BsSortAlphaDown } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";

const MiApi = (props) => {
  const { personaje, setPersonaje } = props;
  const [personajes, setPersonajes] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    const llamandoAPI = async () => {
      try {
        const respuesta = await fetch(
          "https://apisimpsons.fly.dev/api/personajes?limit=700&page=1"
        );

        const data = await respuesta.json();
        console.log("data", data.docs);

        setPersonajes(data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    llamandoAPI();
  }, [personaje]);

  const personajesFiltrados = personajes.filter((simpson) => {
    const enMinuscula = personaje.toLocaleLowerCase();
    return simpson.Nombre.toLowerCase().includes(enMinuscula);
  });

  const handleOrdenar = () => {
    setAsc(!asc);
    if (asc) {
      const ordenarArray = (x, y) => {
        if (x.Nombre < y.Nombre) {
          return -1;
        }
        if (x.Nombre > y.Nombre) {
          return 1;
        }
        return 0;
      };
      const ordenados = personajesFiltrados.sort(ordenarArray);
      setPersonajes(ordenados);
    } else if (asc === false) {
      const descedentes = personajesFiltrados.reverse();
      setPersonajes(descedentes);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        {" "}
        <Button
          onClick={handleOrdenar}
          style={{ marginLeft: "2%" }}
          variant="warning"
        >
          Ordenar <BsSortAlphaDown />
        </Button>
      </div>
      <Container className="d-flex flex-wrap mt-5">
        {personajesFiltrados.map((elem, index) => {
          return (
            <Card
              style={{
                width: "20%",
                margin: "2%",
                backgroundColor: "#F2D300",
                borderRadius: "10%",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div style={{ height: "250px", overflow: "hidden" }}>
                <Card.Img
                  style={{ height: "100%" }}
                  variant="top"
                  src={elem.Imagen}
                />
              </div>
              <Card.Body>
                <Card.Title>{elem.Nombre}</Card.Title>
                <Card.Text>{elem.Ocupacion}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default MiApi;
