import Cards from "./views/cards/Cards";
import axios from "axios";
import { useState, useEffect } from "react";

function CardsLogic() {
  const [digimons, setDigimons] = useState();
  const [digiPage, setDigiPage] = useState(0);

  function nextPage() {
    setDigiPage(digiPage + 1);
    console.log(digiPage);
  }

  function backPage() {
    if (digiPage != 0) {
      setDigiPage(digiPage - 1);
      console.log(digiPage);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await axios.get(
          `https://www.digi-api.com/api/v1/digimon?page=${digiPage}`
        );
        console.log(db.data);
        setDigimons(db.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [digiPage]);

  return (
    <div>
      <Cards digimons={digimons} />
      <button onClick={backPage}>Back page</button>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
}

export default CardsLogic;
