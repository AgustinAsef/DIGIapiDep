import { Link } from "react-router-dom";
function InitMesage() {
  return (
    <section>
      <div>
        <img src="" alt="" />
        <p>Agustin Asef</p>
        <p>descripcion</p>
        <a href="https://www.linkedin.com/in/agustin-battigane-asef/">LinkdIn</a>
        <a href="">github</a>
        <Link to={"/api/digimons"}>
          <button>
            Iniciar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InitMesage;