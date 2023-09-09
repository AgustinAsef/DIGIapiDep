import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CardDetail from "./views/cards/CardsDetail";

function CartLogicDetail() {
  const [digimonData, setDigimonData] = useState();

  const query = new URLSearchParams(useLocation().search);
  const questionId = query.get('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await axios.get(`https://digiapidepproduction.up.railway.app/api/digimons/${questionId}`);
        setDigimonData(db.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[questionId]);
  
    return (
      <div>
        <CardDetail digimonData={digimonData} />
      </div>
    );
}

export default CartLogicDetail;
