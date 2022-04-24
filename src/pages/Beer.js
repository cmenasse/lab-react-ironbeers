import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BeerDetails from "../components/BeerDetails";
import axios from "axios";
const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function Beer() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      const beerFromApi = await axios.get(`${API_URL}/${id}`);
      setBeer(beerFromApi.data);
    };
    getBeer();
  }, [id]);

  return <BeerDetails beer={beer} />;
}

export default Beer;