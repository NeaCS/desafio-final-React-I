
import { MDBCol } from "mdb-react-ui-kit";


const MySearchBar = (props) => {
  const { handleBuscar, personaje, setPersonaje } = props;

    handleBuscar(personaje);


  
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <MDBCol md="6">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar"
            aria-label="Search"
            value={personaje}
            onChange={(e) => {setPersonaje(e.target.value)}}
          />
        </MDBCol>
      </div>

    </>
  );
};

export default MySearchBar;
