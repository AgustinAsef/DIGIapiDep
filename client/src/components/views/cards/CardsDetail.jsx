import { Link } from "react-router-dom";
import "../../style/sectionDetail.css";
import "../../style/cards.css";

function CardDetail(digimonData) {
  const data = digimonData.digimonData;
  console.log(digimonData.digimonData);
  if (!data) {
    return <div>Cargando...</div>;
  }

  function gotop() {
    scroll(150,150)
  }
  return (
    <>
      {
        <section>
          <div className="divDetailContainer p" id="digimonDetailContainer">
          <h2 className="center">{data.digiName}</h2>
            <div className="center divImgDetailContianer">
              <div className="center divImgDetail">
                <img
                  src={data.img[0].href}
                  alt="imagen del digimon"
                  className="ImgDetail"
                />
                <div className="spacebetwen" key={data.id}>
                  {data.fields.map((field) => (
                    <>
                      <img src={field.image} alt="" className="p" />
                    </>
                  ))}
                </div>
              </div>
              <div className="divCharacteristicsDetailContainer">
                <h3>Level:</h3>
                <h4>{data.level}</h4>
                <h3 className="center p">Skills:</h3>
                <div className="divSkillsContainer">
                  {data.skills.map((skills) => (
                    <h4 className="p" key={skills.id}>
                      {skills.skill}
                    </h4>
                  ))}                  
                </div>
              </div>
            </div>
            <div className="p ">
              <h4>Description:</h4>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="p">
            <h4 className="center">Next evolutions:</h4>
            <div className="cardsContainerSection">
              {data.evolutions.map((nextEvo) => (
                <div key={nextEvo.id} className="cardContainer">
                  <Link to={`/api/digimons/digimon?id=${nextEvo.id}`} onClick={gotop}>
                    <div className="cardNameContainer">
                      <img
                        src={nextEvo.image}
                        alt="imagen del digimon"
                        className="cardImg"
                      />
                      <p className="center">
                        {nextEvo.digimon}
                        <br />
                        {nextEvo.condition}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </>
  );
}

export default CardDetail;
