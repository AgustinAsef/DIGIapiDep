import "../style/nav.css"
import img from "../img/difiiasaludo.png"
import { Link } from "react-router-dom"

function Nav() {

    return(
      <Link to={'https://digiapi-production.up.railway.app/api/digimons/'}>
          <section className="nav">
              <div className="navDiv">
                <img src={img} alt="logo" className="navimg"/>
                <p className="navText">DIGIapi</p>
              </div>
              <div className="navDiv">
              </div>
          </section>
      </Link>
      )         
}

export default Nav