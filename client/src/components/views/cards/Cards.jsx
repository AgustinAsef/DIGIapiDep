import { Link } from "react-router-dom";
import "../../style/cards.css"
function Cards(digimons) {
  const digimonsArray = digimons.digimons;
  if (!digimonsArray) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <div className="cardsContainerSection">
      {digimonsArray.map((digimon) => (
        <div className="cardContainer" key={digimon.id}>
          <Link to={`/api/digimons/digimon?id=${digimon.id}`}>
          <div className="cardNameContainer">
            <img
              src={digimon.image}
              alt="imagen del digimon"
              className="cardImg"
            />
            <h1 className="cardName">{digimon.name}</h1>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
