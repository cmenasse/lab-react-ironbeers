import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BeerDetails from "../components/BeerDetails";
const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      const beerFromApi = await axios.get(`${API_URL}/random`);
      setBeer(beerFromApi.data);
    };
    getBeer();
  }, []);

  return <BeerDetails beer={beer} />;
}

export default RandomBeer;